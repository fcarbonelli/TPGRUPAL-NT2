# Taller de Programación 2


## Descripción del proyecto

La idea de este proyecto consiste en desarrollar una plataforma web para comprar y vender vehículos, tanto usados como 0km.
Esta propuesta consiste en generar una relación de User-Vehiculo y a partir de dicha relación generar las bases y funciones necesarias
para el proyecto y para cada una de las entidades provistas.
A su vez, éstas estarán conformadas por campos/propiedades que posibilitarás realizar las operaciones principales de una API REST, 
pero modeladas a partir de las necesidades del proyecto.


#### Listado de roles 

- Invitado
- Vendedor
- Administrador

#### Listado de entidades

- Usuario
- Vehiculo

### Instrucciones técnicas

#### Descargar el proyecto

> git clone  https://github.com/fcarbonelli/TPGRUPAL-NT2.git

#### Instalar dependencias

> npm install

#### Instalación de entorno de desarrollo

- Crear un cluster y una base de datos en MongoDB Atlas
- Crear un archivo .env con la siguiente estructura y sus respectivos valores

```
  DB_USER = {DB_USER}
  DB_PASS = {DB_PASSWORD}
  DB_NAME = {DB_NAME}

  JWT_SECRET = {JWT_SECRET}
```

#### Ejecución del proyecto

> npm run server

## Documentación

- User Endpoints

```javascript
  // CREAR USUARIO
  router.post('/users');
  // LOGIN 
  router.post('/users/login');
  // LOGOUT 
  router.post('/users/logout');
  // LOGOUT PARA TODOS LOS DISPOSITIVOS
  router.post('/users/logoutAll');
  // GET DEL USUARIO AUTENTICADO
  router.get('/users/me');
  // DELETE DEL USUARIO AUTENTICADO
  router.delete('/users/me');
```
- Vehicle Endpoints

```javascript
  // CREAR VEHICULO (POST)
  router.post('/vehicles');
  // VEHICULO (GET)
  router.get('/vehicles');
  // VEHICULO (SHOW)
  router.get('/vehicles/id');
  // VEHICULO (UPDATE)
  router.put('/vehicles/id');
  // VEHICULO (DELETE)
  router.delete('/vehicles/id');
```

## Contribución
Los Pull Request son bienvenidos. Para cambios mayores, por favor primero abrir un issue para discutir lo que desearías cambiar.

Por favor, asegúrate de actualizar los tests de forma apropiada.

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
