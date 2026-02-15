# GUÍA DE PERSONALIZACIÓN RÁPIDA - Café Optimeals

## 📝 Actualizar Información de Contacto

### 1. Dirección y Teléfono
**Archivo**: `src/components/Location.jsx` y `src/components/Footer.jsx`

Busca y reemplaza:
- `"Tu dirección aquí"` → Tu dirección real
- `"+52 XXX XXX XXXX"` → Tu número de teléfono
- `"hola@cafeoptimeals.com"` → Tu email

### 2. Horarios
**Archivo**: `src/components/Location.jsx` y `src/components/Footer.jsx`

```javascript
content: 'Lun - Vie: 7:00 - 20:00\nSáb - Dom: 8:00 - 21:00',
```

### 3. Google Maps
**Archivo**: `src/components/Location.jsx`

1. Reemplaza el link en:
```javascript
link: 'https://maps.google.com',
```

2. Para el video de ubicación:
   - Graba un video corto mostrando tu ubicación en Google Maps
   - Guárdalo como `/public/assets/video/location.mp4`
   - Descomenta las líneas del video en `Location.jsx`

## 🍽️ Actualizar Menú

**Archivo**: `src/components/Menu.jsx`

Modifica el objeto `menuItems`:

```javascript
const menuItems = {
  coffee: [
    {
      id: 1,
      name: 'Nombre del Producto',
      description: 'Descripción del producto',
      price: '$XX',
      image: '/assets/menu/imagen.jpg',
      featured: true, // true para destacar
    },
    // ... más productos
  ],
};
```

## 🖼️ Agregar Imágenes

### Galería
1. Coloca tus fotos en `/public/assets/gallery/`
2. Edita el array `images` en `src/components/Gallery.jsx`

### Menú
1. Coloca fotos de productos en `/public/assets/menu/`
2. Referencia en el objeto `menuItems`

### Hero
- Puedes agregar una imagen de fondo en el Hero modificando `src/components/Hero.jsx`

## 📱 Redes Sociales

**Archivos**: `src/components/Contact.jsx` y `src/components/Footer.jsx`

Actualiza los links:
```javascript
href="https://www.instagram.com/cafeoptimeals/"  // Tu Instagram
href="https://facebook.com/tupage"                // Tu Facebook
href="https://wa.me/52XXXXXXXXXX"                 // Tu WhatsApp
```

## 🎨 Cambiar Colores

**Archivo**: `tailwind.config.js`

```javascript
colors: {
  coffee: {
    50: '#faf7f4',  // Más claro
    // ... tus colores personalizados
    900: '#3d2415', // Más oscuro
  },
},
```

## 🎵 Audio Ambiental

1. Consigue un audio de ambiente de cafetería (MP3, < 5MB)
2. Guárdalo en `/public/assets/audio/ambient.mp3`
3. El componente `AudioController` lo cargará automáticamente

## 📦 Assets Necesarios

### Estructura Mínima:
```
public/assets/
├── gallery/          # 6-8 fotos de tu café/productos
├── menu/            # Fotos de cada producto del menú
├── video/           # Video opcional de ubicación
└── audio/           # Audio ambiental opcional
```

## 🚀 Comandos Rápidos

```powershell
# Instalar dependencies
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview
```

## ✅ Checklist Pre-Lanzamiento

- [ ] Actualizar información de contacto
- [ ] Agregar fotos de galería
- [ ] Agregar fotos de productos del menú
- [ ] Actualizar precios del menú
- [ ] Configurar links de redes sociales
- [ ] Agregar video de ubicación (opcional)
- [ ] Agregar audio ambiental (opcional)
- [ ] Probar en móvil, tablet y desktop
- [ ] Optimizar imágenes (usar WebP si es posible)
- [ ] Actualizar meta tags en `index.html`

## 💡 Tips

1. **Imágenes**: Usa tamaño máximo 1920x1080px, optimizadas para web
2. **Video**: Máximo 30 segundos, formato MP4
3. **Audio**: MP3, 128kbps, en loop
4. **Performance**: Comprime todas las imágenes antes de subirlas

## 🐛 Solución de Problemas

### Las imágenes no se ven:
- Verifica que estén en `/public/assets/`
- Revisa que las rutas en el código coincidan con los nombres de archivo

### Las animaciones no funcionan:
- Limpia caché del navegador
- Ejecuta `npm install` de nuevo

### El build falla:
- Verifica que todas las dependencias estén instaladas
- Ejecuta `npm install` y luego `npm run build`

---

¿Necesitas más ayuda? Revisa el README.md principal para documentación completa.
