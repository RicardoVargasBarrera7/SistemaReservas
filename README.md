# ⚽ Sistema de Gestión de Reservas de Canchas Sintéticas

Aplicación web universitaria para gestionar las reservas de canchas sintéticas y la información relacionada con los usuarios.

El proyecto se desarrolla utilizando una arquitectura monolítica modular, con frontend y backend separados.

## 🛠️ Tecnologías

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
* pg
* bcryptjs
* dotenv

## 📁 Estructura

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

## ✅ Funcionalidades actuales

* Inicio de sesión.
* Creación de cuenta.
* Recuperación de contraseña (interfaz).
* Validación de formularios.
* Registro mediante API REST.
* Inicio de sesión mediante API REST.
* Validación de correos duplicados.
* Hash de contraseñas con `bcryptjs`.
* Roles: Cliente, Empleado y Administrador.
* Diseño responsive.

## 🗄️ Base de datos

Se utiliza PostgreSQL.

Crear la base de datos:

```sql
CREATE DATABASE sistema_reservas;
```

Después ejecutar:

```text
backend/src/database/estructura.sql
```

El archivo crea las tablas y roles necesarios para el módulo de usuarios.

## ⚙️ Instalación

### Backend

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

Configurar el archivo `.env`:

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=tu_contraseña
POSTGRES_DATABASE=sistema_reservas
PORT=3000
```

Ejecutar:

```powershell
npm run dev
```

Backend:

```text
http://localhost:3000
```

### Frontend

En otra terminal:

```powershell
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## 🔌 API

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

## 🔐 Seguridad

* Las contraseñas se almacenan mediante hash con `bcryptjs`.
* Las credenciales de PostgreSQL se manejan mediante `.env`.
* Las consultas utilizan parámetros para evitar inyección SQL.
* El login utiliza mensajes de error generales.

## 🚧 Pendiente

* Mantener la sesión.
* Cerrar sesión.
* Recuperación de contraseña funcional.
* Permisos según rol.
* Módulo de canchas.
* Módulo de reservas.
* Pagos.
* Gestión de balones y petos.
* Reportes.

## 👨‍💻 Proyecto

Proyecto universitario de **Ingeniería de Sistemas**.

Desarrollado para aplicar conocimientos de React, TypeScript, Node.js, Express, PostgreSQL y desarrollo de APIs REST.
