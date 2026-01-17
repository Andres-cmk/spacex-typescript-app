# 🚀 SpaceX Launches Viewer

Una aplicación web moderna e interactiva para explorar los lanzamientos de SpaceX, construida con React, TypeScript y Tailwind CSS.

## ✨ Características

- 🎠 **Carrusel interactivo** - Navega a través de múltiples lanzamientos con un slider fluido
- 🎨 **Diseño Glassmorphism** - Efectos de vidrio esmerilado con gradientes vibrantes
- 🌟 **Auroras animadas** - Efectos de luz sutiles detrás de cada card
- 🔗 **Enlaces directos** - Acceso a artículos externos sobre cada lanzamiento
- 📱 **Responsive** - Se adapta perfectamente a diferentes tamaños de pantalla
- ⚡ **Animaciones suaves** - Transiciones elegantes en hover y scroll
- 🌌 **Tema espacial** - Paleta de colores inspirada en el espacio (violeta, índigo, negro)

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework de estilos
- **HeroUI** - Componentes de UI
- **React Slick** - Carrusel/Slider
- **Vite** - Build tool y dev server
- **SpaceX API v3** - Datos de lanzamientos

## 🎨 Diseño

- Fuente **Orbitron** para el título principal (estilo futurista)
- Fuente **Rajdhani** para los nombres de misiones (moderna y legible)
- Gradientes animados con efectos de clip de texto
- Cards con efecto glassmorphism y auroras de fondo
- Animación de hover con escala y sombras

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/spacex-launches-viewer.git

# Entrar al directorio
cd spacex-launches-viewer

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 🚀 Uso

Una vez iniciado el servidor de desarrollo, abre tu navegador en `http://localhost:5173` (o el puerto que Vite asigne).

La aplicación cargará automáticamente los datos de la API de SpaceX y mostrará:
- Logo de SpaceX con efecto blur
- Título animado con gradiente
- Carrusel con cards de lanzamientos
- Información de cada misión (nombre, número de vuelo, fecha, cohete)
- Botón para leer artículos relacionados

## 📁 Estructura del Proyecto

```
api/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── services/        # Lógica de llamadas a la API
│   │   └── launches.ts
│   ├── types/           # Definiciones de tipos TypeScript
│   │   └── typesAPI.ts
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── main.css         # Estilos globales y configuración de Tailwind
├── public/              # Archivos públicos
├── index.html           # HTML principal
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
├── vite.config.ts       # Configuración de Vite
└── tailwind.config.js   # Configuración de Tailwind (opcional con v4)
```

## 🌐 API

Este proyecto consume la [SpaceX API v3](https://api.spacexdata.com/v3):
- **Endpoint**: `https://api.spacexdata.com/v3/launches`
- **Datos obtenidos**: Nombre de misión, número de vuelo, fecha, información del cohete, enlaces a recursos

## 🎯 Características futuras

- [ ] Filtrado por tipo de cohete
- [ ] Búsqueda de misiones
- [ ] Vista detallada de cada lanzamiento
- [ ] Modo claro/oscuro
- [ ] Paginación o carga infinita
- [ ] Estadísticas de lanzamientos

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 👨‍💻 Autor

Desarrollado con 💜 por [Andres Ramirez](https://github.com/Andres-cmk/)

---
