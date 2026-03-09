# Deployment Instructions

## MongoDB Atlas setup

1. Create an Atlas account and a new project.
2. Build a cluster.
3. Create a Database User (username/password).
4. Network Access:
   - Add your IP (for local dev).
   - For Render, you can temporarily allow `0.0.0.0/0` (recommended: restrict later).
5. Get the connection string and set it as `MONGODB_URI`.

## Local environment variables

- Create `travel-platform/.env` (do not commit) using `travel-platform/.env.example`.

## Backend deployment (Render)

1. Create a new **Web Service** from the repo.
2. Root directory: `travel-platform/server`
3. Build command:
   - `npm install`
4. Start command:
   - `npm start`
5. Add environment variables on Render:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN` (optional)
   - `BCRYPT_SALT_ROUNDS` (optional)
   - `CLIENT_ORIGIN` (your Vercel URL)
6. Deploy.

## Frontend deployment (Vercel)

1. Import the repo into Vercel.
2. Root directory: `travel-platform/client`
3. Add environment variables:
   - `VITE_API_BASE_URL` (Render backend URL, e.g. `https://your-service.onrender.com/api`)
4. Deploy.

## Production environment variables

### Server (Render)

- `MONGODB_URI`
- `JWT_SECRET`
- `CLIENT_ORIGIN=https://your-vercel-app.vercel.app`

### Client (Vercel)

- `VITE_API_BASE_URL=https://your-render-service.onrender.com/api`
