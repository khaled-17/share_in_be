"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('ShareIn API')
        .setDescription('The ShareIn Backend API description')
        .setVersion(packageJson.version)
        .addTag('share-in')
        .addBearerAuth()
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory, {
        swaggerOptions: {
            displayRequestDuration: true,
            tryItOutEnabled: true,
            filter: true,
            persistAuthorization: true,
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
//# sourceMappingURL=main.js.map