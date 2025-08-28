# 📁 Estructura de Componentes

Esta carpeta contiene todos los componentes React organizados por funcionalidad para facilitar el mantenimiento y comprensión del código.

## 🗂️ Organización de Carpetas

### 📱 **core/**
**Propósito**: Componentes fundamentales del sistema operativo Windows 10 simulado.

- `Desktop.js` - Escritorio principal con iconos y gestión de ventanas
- `Window.js` - Sistema de ventanas arrastrable y redimensionable
- `DesktopIcon.js` - Iconos individuales del escritorio
- `Taskbar.js` - Barra de tareas con reloj y aplicaciones abiertas
- `StartMenu.js` - Menú de inicio de Windows
- `LoginScreen.js` - Pantalla de inicio de sesión
- `Loader.js` - Pantalla de carga inicial con mensajes motivacionales
- `WindowsLogo.js` - Componente del logo de Windows

### 💻 **applications/**
**Propósito**: Aplicaciones funcionales que se pueden abrir en ventanas.

- `ChromeBrowser.js` - Navegador web completo con navegación, historial y iframe
- `FileExplorer.js` - Explorador de archivos con navegación por carpetas
- `MailBrowser.js` - Cliente de correo electrónico
- `ResumePdfViewer.js` - Visor de PDF para mostrar el currículum

### 🌐 **social-browsers/**
**Propósito**: Navegadores especializados para redes sociales.

- `GithubBrowser.js` - Muestra el perfil de GitHub
- `LinkedinBrowser.js` - Muestra el perfil de LinkedIn
- `InstagramBrowser.js` - Muestra el perfil de Instagram
- `SocialBrowser.module.css` - Estilos compartidos para navegadores sociales

### 📄 **portfolio-content/**
**Propósito**: Componentes que muestran el contenido del portfolio personal.

- `ProjectsFolder.js` - Lista de proyectos realizados con enlaces
- `SkillsFolder.js` - Habilidades técnicas y competencias
- `EducationFolder.js` - Formación académica y estudios
- `CertificationsFolder.js` - Certificaciones obtenidas
- `ContactFolder.js` - Información de contacto
- `PersonalInfoFolder.js` - Información personal del desarrollador
- `AdditionalInfoFolder.js` - Información adicional
- `Experience.js` - Experiencia laboral y profesional

### 🔧 **shared/**
**Propósito**: Componentes y estilos reutilizables entre diferentes partes del proyecto.

- `FolderContent.module.css` - Estilos compartidos para carpetas de contenido
- `Experience.module.css` - Estilos específicos para experiencia
- `theme-provider.tsx` - Proveedor de temas para la aplicación

### 🎨 **ui/**
**Propósito**: Componentes de interfaz de usuario reutilizables basados en shadcn/ui.

Contiene componentes como botones, diálogos, formularios, etc. que se pueden usar en toda la aplicación.

## 🔄 Flujo de Componentes

```
Desktop (core) 
    ├── DesktopIcon (core)
    ├── Window (core)
    │   ├── ChromeBrowser (applications)
    │   ├── FileExplorer (applications)
    │   │   ├── ProjectsFolder (portfolio-content)
    │   │   ├── SkillsFolder (portfolio-content)
    │   │   └── ...
    │   └── GithubBrowser (social-browsers)
    └── Taskbar (core)
        └── StartMenu (core)
```

## 📋 Imports después de la reorganización

Debido a la nueva estructura, necesitarás actualizar las rutas de importación en varios archivos:

```javascript
// Antes
import Desktop from "./Desktop"

// Después  
import Desktop from "./core/Desktop"
```

## 🎯 Próximos pasos recomendados

1. **Actualizar imports** en los archivos que usan estos componentes
2. **Crear índices** (`index.js`) en cada carpeta para facilitar las importaciones
3. **Añadir TypeScript** gradualmente para mejor tipo de datos
4. **Documentar componentes** con JSDoc para cada función principal
