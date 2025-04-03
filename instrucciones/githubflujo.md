# 🚀 Flujo de Trabajo en Git para el Proyecto de Gestión de Inventario

Este documento describe el flujo de trabajo en Git para el desarrollo del proyecto de gestión de inventario en la ferretería. Se establecen convenciones para ramas, commits y estrategias de colaboración.

---

## 🛠 Configuración Inicial en Git

### 1️⃣ Inicializar el repositorio (si aún no lo has hecho)
```bash
git init
git remote add origin <URL_DEL_REPOSITORIO>
```

### 2️⃣ Crear y subir la rama `develop`
```bash
git branch develop
git checkout develop
git push origin develop
```

### 3️⃣ Proteger la Rama `main`
En **GitHub/GitLab/Bitbucket**:
1. Ve a **Settings → Branches → Branch protection rules**.
2. Agrega `main` y activa:
   - ✅ Requerir revisión de Pull Requests antes de fusionar.
   - ✅ Prohibir push directo a `main`.
   - ✅ Permitir fusiones solo desde `develop`.

Opcionalmente, puedes hacer lo mismo con `develop`, permitiendo solo merges desde `feature/*`.

---

## 📌 Estructura de Ramas

Para mantener un código organizado y evitar cambios accidentales en `main`, usamos las siguientes ramas:

- **`main`** → Rama principal protegida. Solo se actualiza con cambios aprobados.
- **`develop`** → Rama de integración donde se combinan nuevas funciones antes de pasar a `main`.
- **`feature/nombre-de-la-funcionalidad`** → Ramas para desarrollar nuevas características.
- **`bugfix/nombre-del-arreglo`** → Ramas para corregir errores detectados en `develop`.
- **`hotfix/nombre-del-fix`** → Ramas para corregir errores críticos en `main`.

---

## 🔄 Flujo de Trabajo en Ramas

### **Crear una nueva rama de funcionalidad**
```bash
git checkout develop
git checkout -b feature/nueva-funcion
git push origin feature/nueva-funcion
```

### **Crear una rama para corregir errores en `develop`**
```bash
git checkout develop
git checkout -b bugfix/error-en-x
git push origin bugfix/error-en-x
```

### **Crear una rama para corregir errores críticos en `main`**
```bash
git checkout main
git checkout -b hotfix/bug-critico
git push origin hotfix/bug-critico
```

### **Enviar cambios a la rama remota**
```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin feature/nueva-funcion
```

### **Actualizar `develop` y `main`**
1. **Crear un Pull Request (PR)** de `feature/nueva-funcion` → `develop`.
2. Una vez aprobado, hacer merge de `develop` → `main`.

---

## ✅ Buenas Prácticas en Commits

### Formato de Commits
```bash
git commit -m "[tipo] Descripción corta del cambio"
```
**Tipos de commit:**
- `feat:` Nueva funcionalidad.
- `fix:` Corrección de errores.
- `chore:` Cambios menores (configuraciones, refactorización, etc.).
- `docs:` Cambios en documentación.
- `test:` Pruebas agregadas o modificadas.

**Ejemplos:**
```bash
git commit -m "feat: agregar filtro de búsqueda en productos"
git commit -m "fix: corregir error de stock negativo"
```

---

## 🔄 Flujo de Trabajo Diario
1. **Actualizar el repositorio**
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. **Crear una rama para el cambio**
   ```bash
   git checkout -b feature/nueva-funcion
   ```
3. **Hacer cambios y realizar commits**
   ```bash
   git add .
   git commit -m "feat: descripción del cambio"
   ```
4. **Enviar la rama al repositorio**
   ```bash
   git push origin feature/nueva-funcion
   ```
5. **Abrir un Pull Request en GitHub/GitLab y solicitar revisión.**

---

## 🏁 Conclusión
Este flujo de trabajo ayuda a organizar el desarrollo, evitar errores en `main` y mejorar la colaboración. ¡Sigamos estas prácticas para un código limpio y manejable! 🚀

