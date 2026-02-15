# 🌟 Café Optimeals - Landing Page Premium

Una experiencia digital cinematográfica y ultra-premium para Café Optimeals, desarrollada con React.js, Tailwind CSS, Framer Motion y GSAP.

## ✨ Características Principales

### 🎬 Experiencia Cinematográfica
- **Preloader Premium**: Animaciones de partículas de café, copa animada y efectos de vapor
- **Hero Épico**: Partículas 3D, efectos parallax, tipografía animada con glow effects
- **Scroll Ultra-Dinámico**: Smooth scroll con Lenis, scroll triggers en cada sección
- **Animaciones Avanzadas**: Fade, zoom, slide, rotate, tilt, blur, glow en cada elemento

### 📱 Secciones Incluidas

1. **Hero Section**
   - Partículas de café interactivas
   - Tipografía animada con efectos 3D
   - Parallax multicapa
   - Efectos de mouse tracking
   - CTAs animados

2. **Galería**
   - Grid responsivo con animaciones
   - Hover effects: tilt, scale, glow, partículas
   - Integración con Instagram
   - Lightbox effects

3. **Menú/Productos**
   - Categorías con tabs animados
   - Cards 3D con hover effects
   - Sistema de badges para productos destacados
   - Micro-interacciones en cada elemento

4. **Ubicación**
   - Video de Google Maps integrado
   - Cards de información de contacto
   - Animaciones de entrada/salida
   - Efectos de hover interactivos

5. **Contacto**
   - Formulario con validación
   - Animaciones de inputs
   - Estados de envío animados
   - Integración con redes sociales

6. **Footer**
   - Enlaces rápidos
   - Información de contacto
   - Redes sociales con animaciones
   - Diseño responsive

### 🎨 Características Técnicas

- **Audio Ambiental**: Sistema de audio opcional con controles de volumen
- **Scroll Progress Bar**: Barra de progreso animada
- **Back to Top**: Botón flotante animado
- **Smooth Scroll**: Implementado con Lenis
- **Cursor Follower**: Cursor personalizado (desktop)
- **Responsive Design**: Optimizado para móvil, tablet y desktop
- **Performance**: Optimizaciones de visibilidad de página

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn

### Pasos de Instalación

1. **Instalar dependencias**
   ```powershell
   npm install
   ```

2. **Iniciar servidor de desarrollo**
   ```powershell
   npm run dev
   ```

3. **Build para producción**
   ```powershell
   npm run build
   ```

4. **Preview del build**
   ```powershell
   npm run preview
   ```

## 📁 Estructura de Carpetas para Assets

### Crear las siguientes carpetas en `/public/assets/`:

```
public/
├── assets/
│   ├── hero/
│   │   └── (imágenes para el hero)
│   ├── gallery/
│   │   ├── coffee-1.jpg
│   │   ├── coffee-2.jpg
│   │   ├── coffee-3.jpg
│   │   ├── coffee-4.jpg
│   │   ├── food-1.jpg
│   │   ├── food-2.jpg
│   │   ├── food-3.jpg
│   │   └── ambiance-1.jpg
│   ├── menu/
│   │   ├── espresso.jpg
│   │   ├── cappuccino.jpg
│   │   ├── latte.jpg
│   │   ├── coldbrew.jpg
│   │   ├── powerbowl.jpg
│   │   ├── toast.jpg
│   │   ├── salad.jpg
│   │   ├── wrap.jpg
│   │   ├── brownie.jpg
│   │   └── cheesecake.jpg
│   ├── video/
│   │   ├── location.mp4
│   │   └── location-poster.jpg
│   └── audio/
│       └── ambient.mp3
```

## 🎨 Personalización

### Colores
Los colores se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  coffee: {
    50: '#faf7f4',
    // ... más tonos
  }
}
```

### Contenido
Para actualizar contenido sin tocar código:

1. **Imágenes**: Coloca tus imágenes en las carpetas correspondientes
2. **Video de ubicación**: Sube tu video a `/public/assets/video/location.mp4`
3. **Audio ambiental**: Sube tu audio a `/public/assets/audio/ambient.mp3`

### Datos de Contacto
Actualiza en los siguientes archivos:
- `src/components/Location.jsx` - Información de ubicación
- `src/components/Contact.jsx` - Formulario y redes sociales
- `src/components/Footer.jsx` - Datos del footer

### Productos del Menú
Modifica el array `menuItems` en `src/components/Menu.jsx`

## 🔧 Tecnologías Utilizadas

- **React 18.2** - Framework principal
- **Vite 5.0** - Build tool y dev server
- **Tailwind CSS 3.4** - Styling
- **Framer Motion 10.16** - Animaciones React
- **GSAP 3.12** - Animaciones avanzadas y scroll triggers
- **Three.js / React Three Fiber** - Efectos 3D
- **Lenis** - Smooth scroll
- **Howler.js** - Audio controller

## 📱 Responsividad

El sitio está completamente optimizado para:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animaciones y Efectos

### Animaciones Incluidas:
- ✅ Fade in/out
- ✅ Slide (up, down, left, right)
- ✅ Scale/Zoom
- ✅ Rotate/Tilt 3D
- ✅ Blur effects
- ✅ Glow effects
- ✅ Parallax multicapa
- ✅ Partículas interactivas
- ✅ Shimmer effects
- ✅ Typewriter effects

### Scroll Triggers:
Cada sección tiene animaciones únicas activadas por scroll:
- Aparición progresiva de elementos
- Transformaciones 3D
- Cambios de opacidad
- Efectos de parallax

## 🌐 Despliegue

### Netlify
```powershell
npm run build
# Sube la carpeta 'dist' a Netlify
```

### Vercel
```powershell
npm run build
# Conecta tu repositorio o sube 'dist'
```

### GitHub Pages
```powershell
npm run build
# Configura GitHub Actions o sube 'dist' manualmente
```

## 📝 Notas Importantes

1. **Imágenes**: Asegúrate de optimizar tus imágenes antes de subirlas (usa formatos WebP para mejor rendimiento)

2. **Video**: El video de ubicación debe ser corto (< 30 segundos) y optimizado para web

3. **Audio**: El archivo de audio ambiental debe ser ligero (MP3, 128kbps recomendado)

4. **Rendimiento**: 
   - Todas las animaciones están optimizadas
   - Lazy loading implementado
   - Code splitting habilitado

5. **SEO**: Actualiza las meta tags en `index.html` con tu información

6. **Accesibilidad**: Todos los componentes incluyen aria-labels y son navegables por teclado

## 🎯 Futuras Actualizaciones

Para agregar nuevas fotos, videos o audio:

1. Coloca los archivos en las carpetas correspondientes en `/public/assets/`
2. Los componentes ya están preparados para cargarlos automáticamente
3. No necesitas modificar el código, solo actualizar las rutas si es necesario

## 📞 Soporte

Para problemas o preguntas:
1. Revisa la documentación de las librerías utilizadas
2. Consulta los comentarios en el código
3. Verifica la consola del navegador para mensajes de error

## 📄 Licencia

Este proyecto fue creado específicamente para Café Optimeals.

---

**Desarrollado con ❤️ para Café Optimeals**

Instagram: [@cafeoptimeals](https://www.instagram.com/cafeoptimeals/)
