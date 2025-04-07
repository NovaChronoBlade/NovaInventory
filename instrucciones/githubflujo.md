# 🚀 Flujo de Trabajo en Git para el Proyecto de Gestión de Inventario

Este documento describe el flujo de trabajo en Git para el desarrollo del proyecto de gestión de inventario en la ferretería. Se establecen convenciones para ramas, commits y estrategias de colaboración.

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
   git push origin develop
   ```
5. **Abrir un Pull Request en GitHub/GitLab y solicitar revisión.**

---

## 🏁 Conclusión
Este flujo de trabajo ayuda a organizar el desarrollo, evitar errores en `main` y mejorar la colaboración. ¡Sigamos estas prácticas para un código limpio y manejable! 🚀

