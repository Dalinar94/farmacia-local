# 🏥 FarmaStock - Backend

Este es el backend del sistema **FarmaStock**, una aplicación diseñada para la gestión de inventarios en farmacias. Proporciona una API RESTful que permite manejar productos, proveedores, stock y alertas de forma eficiente.

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** (con MongoDB Compass para la gestión visual)
- **Mongoose**
- **Dotenv**
- **Nodemon**

## 📁 Estructura del proyecto

## 🔄 Flujo de ejecución

1. `routes/` → recibe la solicitud HTTP y la dirige al controlador correspondiente.
2. `controllers/` → procesa la solicitud y llama a los servicios necesarios.
3. `services/` → ejecuta la lógica de negocio y valida los datos.
4. `repositories/` → realiza las operaciones con la base de datos.
5. `models/` → define la estructura de los datos almacenados.

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/farmastock-backend.git
   cd farmastock-backend
