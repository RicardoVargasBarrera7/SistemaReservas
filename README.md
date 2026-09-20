# Sistema de Gestión de Reservas de Canchas Sintéticas

Sistema para gestionar las reservas de canchas sintéticas y la información relacionada con los usuarios.

El proyecto se desarrolla utilizando una arquitectura monolítica, con frontend y backend separados.

## Tecnologías

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React

### Backend

* Node.js
* Express
* TypeScript
* PostgreSQL

## Estructura

```text
SistemaReservas/
├── frontend/
│   └── src/
│       ├── components/
│       ├── images/
│       ├── pages/
│       ├── services/
│       ├── App.tsx
│       └── main.tsx
│
├── backend/
│   └── src/
│       ├── controllers/
│       ├── database/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── app.ts
│
└── README.md
```

## Base de datos

Se utiliza PostgreSQL.

## Instalación

### Backend

Configurar el archivo `.env`:

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=tu_contraseña
POSTGRES_DATABASE=sistema_reservas
PORT=3000
```

Se Ejecuta /backend y /frontend
npm run dev 


## API

### Estado

```http
GET /api/salud
```

### Registro

```http
POST /api/auth/registro
```

### Login

```http
POST /api/auth/login
```

## Seguridad

* Las contraseñas se almacenan mediante hash con `bcryptjs`.
* Las credenciales de PostgreSQL se manejan mediante `.env`.
