# 🚀 INICIO RÁPIDO - Café Optimeals Landing Page

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** versión 16 o superior ([Descargar aquí](https://nodejs.org/))
- Un editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

## ⚡ Instalación en 3 Pasos

### Paso 1: Instalar Dependencias

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
npm install
```

Esto instalará todas las librerías necesarias. Puede tomar 2-5 minutos.

### Paso 2: Iniciar el Servidor de Desarrollo

```powershell
npm run dev
```

El sitio se abrirá automáticamente en tu navegador en `http://localhost:3000`

### Paso 3: ¡Personalizar!

1. **Agregar tus imágenes** en `/public/assets/`
2. **Actualizar información** en los componentes (ver CUSTOMIZATION_GUIDE.md)
3. **Ver cambios en tiempo real** - el navegador se actualiza automáticamente

## 📁 Primeros Pasos con Assets

### Estructura de Carpetas Creada:

```
public/assets/
├── hero/       → Imágenes del hero
├── gallery/    → Fotos de la galería (8 imágenes)
├── menu/       → Fotos de productos (10 imágenes)
├── video/      → Video de ubicación (opcional)
└── audio/      → Audio ambiental (opcional)
```

### Prioridad de Assets:

1. **ALTA PRIORIDAD** (necesarios para que se vea bien):
   - 6-8 imágenes para galería
   - Fotos de productos del menú
   
2. **MEDIA PRIORIDAD**:
   - Imagen(es) para el hero
   
3. **BAJA PRIORIDAD** (opcionales):
   - Video de ubicación
   - Audio ambiental

## 🎨 Personalización Rápida

### Cambiar Información de Contacto:

1. Abre `src/components/Footer.jsx`
2. Busca y reemplaza:
   - `"Tu Dirección"` → Tu dirección real
   - `"+52 XXX XXX XXXX"` → Tu teléfono
   - `"hola@cafeoptimeals.com"` → Tu email

### Actualizar Menú:

1. Abre `src/components/Menu.jsx`
2. Modifica el objeto `menuItems` con tus productos y precios

### Redes Sociales:

1. Ve a `src/components/Contact.jsx` y `Footer.jsx`
2. Actualiza los links de Instagram, Facebook, WhatsApp

## 🔧 Comandos Útiles

```powershell
# Desarrollo (con hot reload)
npm run dev

# Crear versión de producción
npm run build

# Previsualizar build de producción
npm run preview

# Limpiar node_modules (si hay problemas)
Remove-Item -Recurse -Force node_modules
npm install
```

## ✅ Checklist de Lanzamiento

- [ ] Instalé las dependencias (`npm install`)
- [ ] El sitio funciona en desarrollo (`npm run dev`)
- [ ] Agregué mis imágenes en `/public/assets/`
- [ ] Actualicé información de contacto
- [ ] Actualicé el menú con mis productos
- [ ] Configuré links de redes sociales
- [ ] Probé el sitio en móvil y desktop
- [ ] Creé el build de producción (`npm run build`)

## 🚀 Despliegue

### Opción 1: Netlify (Recomendado - Gratuito)

1. Crea cuenta en [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta `dist` después de ejecutar `npm run build`
3. ¡Listo! Tu sitio está en línea

### Opción 2: Vercel (Gratuito)

1. Crea cuenta en [Vercel](https://vercel.com/)
2. Conecta tu repositorio de GitHub
3. Vercel hace el deploy automáticamente

### Opción 3: GitHub Pages (Gratuito)

1. Sube tu código a GitHub
2. Ejecuta `npm run build`
3. Configura GitHub Pages para usar la carpeta `dist`

## 🆘 Solución de Problemas

### ❌ Error: "npm no se reconoce como comando"
**Solución:** Instala Node.js desde [nodejs.org](https://nodejs.org/)

### ❌ Las imágenes no se muestran
**Solución:** 
- Verifica que las imágenes estén en `/public/assets/`
- Revisa que los nombres coincidan con el código
- Limpia caché del navegador (Ctrl + Shift + R)

### ❌ El build falla
**Solución:**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

### ❌ Animaciones no funcionan
**Solución:**
- Limpia caché del navegador
- Verifica que todas las dependencias se instalaron correctamente

## 📞 ¿Necesitas Ayuda?

1. Lee el [README.md](README.md) completo
2. Consulta [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)
3. Revisa la consola del navegador para errores (F12)

## 🎯 Próximos Pasos

1. **Personaliza el contenido** - Usa CUSTOMIZATION_GUIDE.md
2. **Optimiza imágenes** - Usa [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
3. **Prueba en diferentes dispositivos** - Móvil, tablet, desktop
4. **Deploy a producción** - Netlify, Vercel o GitHub Pages

---

**🎉 ¡Felicidades! Ahora tienes una landing page ultra-premium para tu café.**

**Instagram:** [@cafeoptimeals](https://www.instagram.com/cafeoptimeals/)
