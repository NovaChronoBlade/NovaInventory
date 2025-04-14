# 🚀 Despliegue de la base de datos MySQL con Docker

Este documento explica cómo instalar y ejecutar la base de datos MySQL usando Docker para el proyecto de gestión de ferretería.

---

## 📦 Requisitos Previos

- Tener instalado [Docker](https://www.docker.com/) en tu máquina.
- Tener un archivo .env en el proyecto con las variables necesarias (ver sección).

---

## 📁 Estructura del archivo .env

Crea un archivo .env en la raíz del backend con las siguientes variables:

```env
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=novainventory
MYSQL_USER=usuario
MYSQL_PASSWORD=contraseña
MYSQL_PORT=3306
```

---

## 🚀 Comandos de Uso

1. **Iniciar la base de datos**

```bash
docker-compose up -d
```

2. **Verificar que esté en ejecución**

```bash
docker ps
```

3. **Detener la base de datos**

```bash
docker-compose down
```

4. **Acceder a la base de datos**

Puedes conectarte a la base de datos usando:

- **MySQL Workbench**:
  - Host: `127.0.0.1`
  - Port: `3306` (o el puerto que hayas configurado)
  - Usuario: `root` o el usuario que hayas definido
  - Contraseña: la que configuraste en el .env

- **Extensión de Visual Studio Code** (como MySQL):
  1. Instala la extensión "MySQL" de Microsoft
  2. Crea una nueva conexión con los mismos parámetros

- **Terminal**:
  ```bash
  docker exec -it mysql-container mysql -u root -p
  ```
  (Introduce la contraseña cuando te lo solicite)

---

## 🛠️ Solución de Problemas

Si tienes problemas de conexión:
- Verifica que el contenedor esté en ejecución (`docker ps`)
- Revisa que los puertos no estén en conflicto
- Comprueba las credenciales en el archivo .env

---

## 💾 Respaldo y Restauración

Para hacer backup de tu base de datos:

```bash
docker exec mysql-container /usr/bin/mysqldump -u root --password=root novainventory > backup.sql
```

Para restaurar:

```bash
backup.sql | docker exec -i mysql-container /usr/bin/mysql -u root --password=root novainventory
```