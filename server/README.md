# Travel Platform Server

## Scripts

- `npm run dev` - start server
- `npm start` - start server

## Env

Copy `../.env.example` to `../.env` and fill:

- `MONGODB_URI`
- `JWT_SECRET`

## Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/profile` (JWT)
- `PUT /api/users/preferences` (JWT)
- `POST /api/users/favorites` (JWT)
- `POST /api/bookings` (JWT)
- `GET /api/bookings` (JWT)
- `DELETE /api/bookings/:id` (JWT)
- `GET /api/destinations`
- `POST /api/destinations` (JWT admin)
