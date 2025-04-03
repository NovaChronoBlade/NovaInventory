# Instrucciones para Clonar y Configurar el Proyecto

## 📌 Verificar Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/get-started) (opcional, si deseas usar MySQL en Docker)

Para verificar si tienes Node.js y npm instalados, ejecuta:

```sh
node -v
npm -v 
```

Si no lo tienes instalado, puedes descargarlo desde [aquí](https://nodejs.org/) o ver el siguiente video para instalarlo en Windows: [Instalar Node.js en Windows](https://www.youtube.com/watch?v=4tT9x948VlE).

---

## 📌 Clonar el Repositorio

Ejecuta el siguiente comando para clonar el proyecto:

```sh
git clone https://github.com/NovaChronoBlade/NovaInventory.git

cd NovaInventory
```

---

## 📌 Configuración del Backend

```sh
cd backend
npm install
cp .env.example .env # Configura las variables de entorno
npm run dev
```

---

## 📌 Configuración del Frontend

```sh
cd frontend
npm install
cp .env.example .env # Configura las variables de entorno
npm run dev
```

---

## 📌 Uso Básico de Git para Colaboración

1. **Actualizar el repositorio local con la última versión del código:**
   ```sh
   git pull origin main
   ```

2. **Agregar cambios:**
   ```sh
   git add .
   ```

3. **Confirmar cambios con un mensaje descriptivo:**
   ```sh
   git commit -m "Descripción de los cambios"
   ```

4. **Subir los cambios al repositorio remoto:**
   ```sh
   git push origin main
   ```

Siguiendo estos pasos, aseguramos que el código esté siempre actualizado y sincronizado entre todos los colaboradores.

