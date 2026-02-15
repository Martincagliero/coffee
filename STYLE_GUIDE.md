# 🎨 GUÍA DE ESTILOS Y MEJORES PRÁCTICAS

## 🎯 Filosofía de Diseño

Este proyecto sigue una filosofía de **diseño cinematográfico y premium**, donde cada elemento debe:
- Tener animaciones suaves y naturales
- Responder de forma intuitiva a las interacciones del usuario
- Mantener coherencia visual en toda la experiencia
- Optimizar rendimiento sin sacrificar la calidad visual

## 🏗️ Arquitectura de Componentes

### Estructura de Componentes

```
src/
├── components/
│   ├── Preloader.jsx          # Pantalla de carga inicial
│   ├── Hero.jsx                # Sección principal
│   ├── CoffeeParticles.jsx     # Sistema de partículas
│   ├── Gallery.jsx             # Galería de imágenes
│   ├── Menu.jsx                # Menú de productos
│   ├── Location.jsx            # Ubicación y contacto
│   ├── Contact.jsx             # Formulario de contacto
│   ├── Footer.jsx              # Pie de página
│   ├── AudioController.jsx     # Control de audio
│   ├── ScrollProgressBar.jsx   # Barra de progreso
│   └── BackToTop.jsx           # Botón volver arriba
├── hooks/
│   └── useScrollEffects.js     # Hooks personalizados
├── App.jsx                     # Componente principal
├── main.jsx                    # Punto de entrada
└── index.css                   # Estilos globales
```

### Convenciones de Nombres

- **Componentes**: PascalCase (`Hero.jsx`, `CoffeeParticles.jsx`)
- **Hooks**: camelCase con prefijo `use` (`useSmoothScroll`)
- **Utilidades**: camelCase (`scrollToTop`)
- **CSS Classes**: kebab-case (`coffee-particle`, `btn-premium`)

## 🎨 Sistema de Colores

### Paleta Principal

```javascript
coffee: {
  50: '#faf7f4',   // Crema muy clara
  100: '#f5ede3',  // Crema clara
  200: '#e8d5c4',  // Beige
  300: '#d9ba9f',  // Café con leche
  400: '#c89b75',  // Caramelo
  500: '#b67f56',  // Café medio ★ Color principal
  600: '#a0653f',  // Café oscuro
  700: '#7d4e31',  // Café tostado
  800: '#5c3722',  // Café muy oscuro
  900: '#3d2415',  // Casi negro
}
```

### Uso Recomendado

- **Fondos**: coffee-900, coffee-800
- **Texto primario**: cream-50, coffee-100
- **Texto secundario**: coffee-300, coffee-400
- **Acentos**: coffee-500, coffee-600
- **Bordes**: coffee-700/30 (con opacidad)

## ✨ Guía de Animaciones

### Principios de Animación

1. **Duración**:
   - Micro-interacciones: 200-300ms
   - Transiciones de sección: 600-1000ms
   - Animaciones complejas: 1200-2000ms

2. **Easing**:
   - Entrada: `ease-out` o `power3.out`
   - Salida: `ease-in` o `power3.in`
   - Movimiento: `ease-in-out` o `power2.inOut`

3. **Delays**:
   - Elementos en secuencia: 100-200ms entre cada uno
   - Grupos de elementos: usar stagger

### Animaciones Predefinidas

```javascript
// Fade In
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}

// Slide Up
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Scale
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}

// 3D Tilt
whileHover={{ rotateX: 5, rotateY: 5 }}
transition={{ duration: 0.4 }}
```

## 📱 Responsive Design

### Breakpoints

```javascript
// Tailwind breakpoints
sm: '640px',   // Móvil grande
md: '768px',   // Tablet
lg: '1024px',  // Laptop
xl: '1280px',  // Desktop
2xl: '1536px'  // Desktop grande
```

### Estrategia Mobile-First

```javascript
// ❌ Evitar
className="text-xl md:text-base"

// ✅ Preferir
className="text-base md:text-xl"
```

## 🚀 Optimización de Rendimiento

### Imágenes

1. **Formatos recomendados**:
   - WebP para fotografías
   - SVG para iconos y logos
   - PNG solo cuando se necesita transparencia

2. **Tamaños**:
   - Hero: 1920x1080px
   - Galería: 800x800px
   - Menú: 600x800px
   - Thumbnails: 400x400px

3. **Optimización**:
   - Comprimir con TinyPNG o Squoosh
   - Usar lazy loading para imágenes fuera del viewport
   - Implementar blur placeholder

### Animaciones

```javascript
// ✅ Usar propiedades GPU-accelerated
transform, opacity

// ❌ Evitar animar
width, height, margin, padding, top, left
```

### Code Splitting

```javascript
// Importación dinámica para componentes pesados
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## 🎯 Mejores Prácticas

### Accesibilidad

1. **Contraste**: Mínimo 4.5:1 para texto normal
2. **Focus States**: Siempre visible y distintivo
3. **Aria Labels**: En botones de iconos
4. **Keyboard Navigation**: Todos los elementos interactivos

```javascript
// Ejemplo de botón accesible
<button
  aria-label="Reproducir audio ambiental"
  className="focus:ring-2 focus:ring-coffee-500"
>
  <PlayIcon />
</button>
```

### SEO

1. **Títulos**: H1 único por página
2. **Alt Text**: Descriptivo en todas las imágenes
3. **Meta Tags**: En index.html
4. **Semantic HTML**: Usar tags apropiados

### Performance

1. **Lazy Loading**: Imágenes y componentes
2. **Memoization**: React.memo para componentes pesados
3. **Debouncing**: Para eventos de scroll/resize
4. **Optimization**: Build con Vite

## 🔧 Herramientas de Desarrollo

### Extensiones Recomendadas (VS Code)

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**

### Atajos Útiles

```javascript
// React snippets
rafce  → React Arrow Function Export Component
useS   → useState hook
useE   → useEffect hook
```

## 📝 Comentarios en Código

### Componentes

```javascript
/**
 * Hero Section Component
 * 
 * Displays the main hero section with:
 * - Animated typography
 * - Particle effects
 * - Parallax backgrounds
 * - Mouse tracking
 * 
 * @component
 */
const Hero = () => {
  // ...
};
```

### Funciones Complejas

```javascript
/**
 * Initializes smooth scroll using Lenis
 * 
 * @hook
 * @returns {void}
 */
export const useSmoothScroll = () => {
  // ...
};
```

## 🐛 Debugging

### Console Logs para Desarrollo

```javascript
// ✅ Desarrollo
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// ❌ Producción - eliminar antes del build
console.log('Debug info:', data);
```

### React DevTools

- Usar para inspeccionar componentes
- Profiler para optimización de rendimiento
- Component tree para estructura

## 🎨 Personalización Avanzada

### Crear Nuevas Animaciones

```javascript
// 1. Definir en tailwind.config.js
keyframes: {
  'custom-animation': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  }
}

animation: {
  'custom': 'custom-animation 3s ease-in-out infinite',
}

// 2. Usar en componente
className="animate-custom"
```

### Extender Tema de Tailwind

```javascript
// tailwind.config.js
extend: {
  spacing: {
    '128': '32rem',
  },
  borderRadius: {
    '4xl': '2rem',
  },
  fontFamily: {
    'custom': ['Custom Font', 'fallback'],
  },
}
```

## 📚 Recursos Adicionales

### Inspiración y Referencias

- [Awwwards](https://www.awwwards.com/) - Diseño web premium
- [Dribbble](https://dribbble.com/) - Inspiración UI/UX
- [Codrops](https://tympanus.net/codrops/) - Tutoriales y demos

### Documentación Oficial

- [React](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Mantén siempre la calidad premium en cada detalle del código.**
