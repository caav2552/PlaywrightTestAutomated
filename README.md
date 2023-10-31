# testautomation
Automatizacion con Playwright

### Prerequisitos
se requiere node.js version 16 o superior 
* install node.js here [node.js](https://nodejs.org/en/)

### Instalacion

clonar el proyecto  y seguir los siguientes pasos

1. instalar los paquetes
   ```sh
   npm install
   ```

### Pruebas

1. Ejecutar Playwright, 

- Comando para ejecutar un feature a la vez
     ```sh
   npm run test:e2e tests/features/login.feature
   ```
  Nota: Cambiar el texto login, por el nombre del feature que desee 
  
- Comando para ejecutar todos los features
   ```sh
   npm run test:e2e tests/features/*.feature
   ```





