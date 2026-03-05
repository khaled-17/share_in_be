import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Read package.json version
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) as {
    version: string;
  };

  const config = new DocumentBuilder()
    .setTitle('ShareIn API')
    .setDescription('The ShareIn Backend API description')
    .setVersion(packageJson.version)
    .addTag('share-in')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    swaggerOptions: {
      displayRequestDuration: true,
      tryItOutEnabled: true,
      filter: true,
      persistAuthorization: true, // حفظ التوكن تلقائياً بعد إدخاله حتى لو تم تحديث الصفحة
    },
    customJsStr: `
        const originalFetch = window.fetch;
        window.fetch = async function() {
          const response = await originalFetch.apply(this, arguments);
          const url = arguments[0];
          if (typeof url === 'string' && (url.includes('/auth/login') || url.includes('/auth/register'))) {
            response.clone().json().then(data => {
              if (data && data.data && data.data.accessToken) {
                const token = data.data.accessToken;
                if (window.ui) {
                  window.ui.authActions.authorize({
                    bearer: {
                      name: 'bearer',
                      schema: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
                      value: token
                    }
                  });
                  console.log('Token successfully applied to Swagger UI');
                }
              }
            }).catch(() => {});
          }
          return response;
        };
      `,
  });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
