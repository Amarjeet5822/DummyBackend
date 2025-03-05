# Full-Stack App: Backend Deployment & Documentation

## 🚀 Overview
This is the backend of a full-stack application built using Node.js, Express, and MongoDB. The backend includes JWT-based authentication and CRUD operations for products.

---

## 🏗️ Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/FullStackBackEnd.git
   cd FullStackBackEnd
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```sh
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the server:
   ```sh
   npm start
   ```

---

## 🔗 Backend API
### API Endpoints
| Method | Endpoint        | Description                          |
|--------|----------------|--------------------------------------|
| POST   | `/auth/signup` | Register a new user                 |
| POST   | `/auth/login`  | Authenticate user and return JWT    |
| GET    | `/products`    | Get all products (protected)        |
| POST   | `/products`    | Create a new product (admin only)   |

### Authentication & Authorization
- JWT-based authentication using `jsonwebtoken`.
- Middleware for role-based access (`admin`, `user`).

---

## 🚀 Deployment Instructions

### Deploy on Render:
1. Push the latest changes:
   ```sh
   git push origin main
   ```
2. Configure environment variables:
   - `MONGO_URI=<your-mongodb-uri>`
   - `JWT_SECRET=<your-secret-key>`
3. Deploy via Render dashboard.

### Deploy on Railway:
1. Run the deployment command:
   ```sh
   railway up
   ```
2. Set up environment variables in the Railway dashboard.

---

## 🔄 Bonus Features (Optional)
### JWT Refresh Tokens
- Access tokens expire in 15 minutes.
- Refresh tokens are stored securely and used to obtain new access tokens.
- Use `POST /auth/token` to refresh tokens.

### Role-Based Authorization
- Users have different roles (`admin`, `user`).
- Certain actions (e.g., creating a product) are restricted to admins.

---

## 📚 Additional Notes
- Ensure that CORS is properly configured if hosting frontend and backend separately.
- Use `.env` files to securely manage sensitive credentials.
- For production, use HTTPS to secure API calls.

---

### 🚀 Happy Coding! 🎉
