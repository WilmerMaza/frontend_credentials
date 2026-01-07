# Migración a Angular - Guía de Instalación

Este proyecto ha sido migrado de React/Vite a Angular 18+.

## Prerequisitos

- Node.js (versión 18 o superior)
- npm o yarn

## Instalación

1. **Instalar dependencias de Angular:**

```bash
npm install
```

Si necesitas instalar Angular CLI globalmente:

```bash
npm install -g @angular/cli
```

2. **Verificar la instalación:**

```bash
ng version
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
# o
ng serve
```

El proyecto estará disponible en `http://localhost:4200`

## Build de Producción

Para crear el build de producción:

```bash
npm run build:prod
# o
ng build --configuration production
```

El build se generará en `dist/digital-military-id/`

## Estructura del Proyecto

```
src/
├── app/
│   ├── pages/              # Componentes de páginas
│   │   ├── index/
│   │   ├── registration/
│   │   ├── id-card/
│   │   ├── pdf-preview/
│   │   ├── verification/
│   │   ├── mobile-view/
│   │   └── not-found/
│   ├── services/           # Servicios Angular
│   │   ├── navigation.service.ts
│   │   └── toast.service.ts
│   ├── utils/              # Utilidades
│   ├── app.module.ts       # Módulo principal
│   ├── app.component.ts    # Componente raíz
│   └── app-routing.module.ts  # Configuración de rutas
├── assets/                 # Recursos estáticos
├── styles.css              # Estilos globales
└── main.ts                 # Punto de entrada
```

## Tecnologías Utilizadas

- **Angular 18+**: Framework principal
- **Angular Material**: Componentes UI
- **Tailwind CSS**: Estilos y utilidades CSS
- **RxJS**: Programación reactiva
- **TypeScript**: Lenguaje de programación

## Cambios Principales de la Migración

1. **Componentes React → Componentes Angular**: Todos los componentes `.tsx` fueron convertidos a componentes Angular con `.ts`, `.html` y `.css`.

2. **React Router → Angular Router**: El enrutamiento ahora usa `@angular/router`.

3. **React Hooks → Servicios Angular**: 
   - `useNavigate` → `NavigationService`
   - `useToast` → `ToastService`
   - `useState` → Propiedades de componente
   - `useEffect` → Lifecycle hooks (`ngOnInit`, etc.)

4. **React Hook Form → Angular Reactive Forms**: Los formularios ahora usan `FormBuilder` y `FormGroup`.

5. **shadcn/ui → Angular Material**: Los componentes UI fueron adaptados a Angular Material manteniendo el diseño original con Tailwind CSS.

## Rutas Disponibles

- `/` - Página principal (Index)
- `/registro` - Registro de personal militar
- `/id-card` - Tarjeta de identificación generada
- `/pdf-preview` - Vista previa del PDF
- `/verificar` - Verificación de credenciales
- `/mobile-view` - Vista móvil
- `**` - Página 404

## Notas Adicionales

- Los assets (imágenes) se encuentran en `src/assets/`
- Los estilos globales están en `src/styles.css`
- La configuración de Tailwind se mantiene en `tailwind.config.ts`
- Firebase Hosting está configurado para servir desde `dist/digital-military-id/`

