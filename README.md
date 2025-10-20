# my-first-static-web-app

A basic Angular application for deployment on Azure Static Web Apps.

## Overview

This is a minimal Angular application created to demonstrate deployment to Azure Static Web Apps. The application displays a simple welcome message.

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Install dependencies
```bash
npm install
```

### Development server
Run `npm start` to start a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/angular-app/browser/` directory.

## Deployment

This application is configured to deploy to Azure Static Web Apps using GitHub Actions. The workflow is defined in `.github/workflows/azure-static-web-apps.yml`.

To deploy:
1. Create an Azure Static Web App resource in Azure Portal
2. Add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your GitHub repository
3. Push to the `main` branch or create a pull request

The app will be automatically built and deployed.

## Project Structure

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
