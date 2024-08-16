######## Paso 1
# Especificamos la imagen de node a utilizar
FROM node:latest as build

# Establecemos el directorio de trabajo
WORKDIR /usr/projects/backend

# Copiamos los ficheros de la carpeta client a la carpeta del contenedor que expone los aplicativos
COPY . /usr/projects/backend


#### Paso 2
# Instalamos dependencias y hacemos build del backend
RUN npm install
RUN npm run build

#### Paso 3
# Exponemos el puerto 5200
EXPOSE 5200

# Inicializamos el servicio
CMD ["node", "dist/server.js"]