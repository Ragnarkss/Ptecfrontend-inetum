# Proyecto de Automatización - Sauce Demo

## 📋 Descripción

Este proyecto implementa pruebas automatizadas end-to-end para la aplicación [Sauce Demo](https://www.saucedemo.com/) utilizando **Playwright** como framework de automatización y **Cucumber** para escribir las pruebas en lenguaje Gherkin.

## 🛠️ Tecnologías

- **Node.js** v22.16.0
- **TypeScript** - Lenguaje de programación
- **Playwright** ^1.57.0 - Framework de automatización de navegadores
- **Cucumber** ^11.3.0 - Framework BDD para pruebas
- **ts-node** ^10.9.2 - Ejecución de TypeScript

## 📁 Estructura del Proyecto

```
ptecfrontend/
│
├── config/
│   └── cucumber.js           # Configuración de Cucumber
│
├── features/                 # Archivos de características (Gherkin)
│   ├── login.feature         # Escenarios de login
│   └── purchase.feature      # Escenarios de compra
│
├── src/
│   ├── pages/               # Page Objects
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   ├── LoginPage.ts
│   │   └── ProductsPage.ts
│   │
│   ├── steps/               # Step Definitions
│   │   ├── login.steps.ts
│   │   └── purchase.steps.ts
│   │
│   └── support/             # Configuración y hooks
│       ├── hooks.ts         # Before/After hooks
│       └── world.ts         # Custom World
│
├── reports/                 # Reportes generados
│   ├── cucumber-report.html
│   └── cucumber-report.json
│
├── package.json
├── tsconfig.json
└── README.md
```
## Prerequisitos
Instalar Node.js 22.16.0
Instalar Visual Studio Code
instalar extensiones de visual studio:
 - Cucumber
 - Playwright

## Instalación

1 - Inicialice el proyecto Node.js usando npm init -f

2 - Instalar Playwright usando npm init playwright@latest

3 - Instalar Cucumber usando npm install -D @cucumber/cucumber

4 - Instalar el nodo ts usando npm install -D ts-node

5 - Eliminar playwright.config.ts, y la carpeta tests & tests-examples




## Ejecución de Pruebas

### Ejecutar todas las pruebas

6 - ejecutar el comando: npm run cucumber


## Escenarios de Prueba

### Login
- Login exitoso con usuario estándar
- Login fallido con usuario bloqueado

### Compra de Productos
- Flujo completo de compra de un producto

## Configuración

### Timeout
El timeout por defecto está configurado a **30 segundos** para permitir la inicialización del navegador y la ejecución de los pasos.

## Reportes

Los reportes se generan automáticamente después de cada ejecución en la carpeta `reports/`:
- `cucumber-report.json` - Reporte en formato JSON
- `cucumber-report.html` - Reporte visual en HTML

##  Page Object Model

El proyecto utiliza el patrón **Page Object Model (POM)** para mantener el código organizado y reutilizable:

- **LoginPage**: Maneja las interacciones con la página de login
- **ProductsPage**: Maneja la página de productos
- **CartPage**: Maneja el carrito de compras
- **CheckoutPage**: Maneja el proceso de checkout

## Escribir Nuevas Pruebas

1. Crear un archivo `.feature` en la carpeta `features/`
2. Escribir los escenarios usando sintaxis Gherkin
3. Implementar los step definitions en `src/steps/`
4. Crear o actualizar los Page Objects en `src/pages/` si es necesario

### Ejemplo de Feature:
```gherkin
Feature: Nueva funcionalidad

  Scenario: Descripción del escenario
    Given el usuario está en la página principal
    When realiza una acción
    Then debería ver el resultado esperado
```

**Nota**: Este proyecto requiere Node.js v22.16.0. Asegúrate de tener la versión correcta instalada antes de ejecutar las pruebas.
