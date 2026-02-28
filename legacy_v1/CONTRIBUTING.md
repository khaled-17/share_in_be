# 📝 Contributing to Swagger Documentation

## ✅ شروط أساسية لأي حد هيكتب Swagger Documentation

عشان نحافظ على جودة الـ API Documentation، كل مساهم لازم يلتزم بالمعايير دي:

---

## 1️⃣ كل Endpoint لازم يحتوي على

### الحد الأدنى المطلوب:
- ✅ `summary` - جملة قصيرة واضحة (بالإنجليزي)
- ✅ `description` - شرح مفصل للـ endpoint وحالات الاستخدام
- ✅ `tags` - لتنظيم الـ APIs في مجموعات منطقية
- ✅ `responses` - **جميع** الاحتمالات الممكنة (مش 200 بس!)

### مثال صحيح:
```javascript
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     description: Returns a paginated list of all registered users. Requires authentication.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
```

---

## 2️⃣ Request Body يجب أن يكون موثق بالكامل

### Required Elements:
- ✅ `required` fields مُحددة بوضوح
- ✅ `type` و `format` لكل field
- ✅ `example` واقعي لكل field
- ✅ `description` لكل field

### مثال صحيح:
```javascript
requestBody:
  required: true
  content:
    application/json:
      schema:
        type: object
        required:
          - email
          - password
        properties:
          email:
            type: string
            format: email
            description: User's email address
            example: user@example.com
          password:
            type: string
            format: password
            minLength: 6
            description: User's password (minimum 6 characters)
            example: password123
```

---

## 3️⃣ كل Response لازم يكون له Schema + Example

### ❌ غلط:
```yaml
200:
  description: Success
```

### ✅ صح:
```yaml
200:
  description: User successfully created
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/AuthResponse'
      example:
        success: true
        message: "User registered successfully"
        data:
          user:
            id: 1
            email: "user@example.com"
          token: "eyJhbGci..."
```

---

## 4️⃣ استخدام Status Codes الصحيحة

### Status Codes المطلوبة لكل نوع:

#### GET Requests:
- ✅ `200` - OK
- ✅ `401` - Unauthorized (لو محمي)
- ✅ `404` - Not Found
- ✅ `500` - Server Error

#### POST Requests:
- ✅ `201` - Created
- ✅ `400` - Bad Request (validation)
- ✅ `401` - Unauthorized
- ✅ `409` - Conflict (duplicate)
- ✅ `500` - Server Error

#### PUT/PATCH Requests:
- ✅ `200` - OK
- ✅ `400` - Bad Request
- ✅ `401` - Unauthorized
- ✅ `404` - Not Found
- ✅ `500` - Server Error

#### DELETE Requests:
- ✅ `204` - No Content
- ✅ `401` - Unauthorized
- ✅ `404` - Not Found
- ✅ `500` - Server Error

---

## 5️⃣ Naming Convention ثابت

### ✅ RESTful URLs صحيحة:
```
GET    /api/v1/users
GET    /api/v1/users/:id
POST   /api/v1/users
PUT    /api/v1/users/:id
DELETE /api/v1/users/:id
```

### ❌ أسماء خاطئة:
```
/getUserData
/createNewUser
/update_user_profile
```

### القواعد:
- lowercase فقط
- استخدم hyphen للكلمات المتعددة (`user-profile`)
- استخدم plural للـ resources (`users` مش `user`)
- استخدم versioning (`/api/v1/`)

---

## 6️⃣ توثيق Authentication

### لو الـ endpoint محمي:
```javascript
security:
  - bearerAuth: []
```

### لازم نشرح في الـ description:
```javascript
description: "Requires authentication. Include JWT token in Authorization header."
```

---

## 7️⃣ Examples واقعية وكاملة

### ❌ غلط:
```javascript
example: "string"
```

### ✅ صح:
```javascript
example: "user@example.com"
```

### القاعدة:
- استخدم بيانات واقعية
- لا تستخدم placeholders عامة
- Examples يجب أن تكون قابلة للنسخ واللصق مباشرة

---

## 8️⃣ استخدام Components للـ Schemas المتكررة

### بدلاً من تكرار نفس الـ schema:
```javascript
// ❌ غلط - تكرار
responses:
  200:
    schema:
      type: object
      properties:
        success: ...
        message: ...
```

### استخدم Component:
```javascript
// ✅ صح - إعادة استخدام
responses:
  200:
    schema:
      $ref: '#/components/schemas/Success'
```

---

## 9️⃣ توثيق Pagination

### لو الـ endpoint بيدعم pagination:
```javascript
parameters:
  - in: query
    name: page
    schema:
      type: integer
      minimum: 1
      default: 1
    description: Page number
  - in: query
    name: limit
    schema:
      type: integer
      minimum: 1
      maximum: 100
      default: 10
    description: Items per page
```

---

## 🔟 Error Objects موحدة

### استخدم نفس الـ structure لكل الأخطاء:
```javascript
{
  "success": false,
  "message": "Error description",
  "errors": [] // optional validation errors
}
```

---

## 💡 القاعدة الذهبية

> **أي حد يقرأ الـ Swagger لازم يقدر يبني Frontend كامل من غير ما يسأل Backend Developer.**

---

## ✅ Checklist قبل الـ Commit

قبل ما تعمل commit للـ documentation:

- [ ] كل endpoint ليه `summary` و `description` واضحين
- [ ] كل `requestBody` ليه `required` fields محددة
- [ ] كل response ليها `status code` + `schema` + `example`
- [ ] استخدمت الـ `components/schemas` للـ objects المتكررة
- [ ] لو في authentication، حطيت `security: bearerAuth`
- [ ] لو في pagination، وثقت الـ `query parameters`
- [ ] كل الـ examples واقعية ومش placeholders
- [ ] النمط RESTful والـ naming conventions صحيحين

---

## 🚫 أخطاء شائعة - تجنبها

### ❌ عدم توثيق الأخطاء
```javascript
responses:
  200:
    description: Success
  // ❌ فين باقي الـ responses؟
```

### ❌ استخدام descriptions عامة
```javascript
summary: "Get data"  // ❌ غامض
summary: "Get all users with pagination" // ✅ واضح
```

### ❌ عدم وضع examples
```javascript
email:
  type: string  // ❌ مفيش example
```

### ❌ تكرار الـ schemas
```javascript
// ❌ نفس الـ User schema متكرر في كل endpoint
```

---

## 📚 Resources

- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger Best Practices](https://swagger.io/docs/specification/best-practices/)
- [REST API Guidelines](https://restfulapi.net/)

---

## 🤝 مراجعة الكود

كل documentation لازم يتراجع من:
1. Tech Lead أو Senior Developer
2. Frontend Developer عشان يتأكد إن كل حاجة واضحة
3. يتم testing عبر Swagger UI قبل الـ merge

---

**Remember:** Documentation is code. Treat it with the same care and standards! 🚀
