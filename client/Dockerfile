######## Paso 1
# Especificamos la imagen de node a utilizar
FROM node:latest as build

# Establecemos el directorio de trabajo
WORKDIR /usr/projects/frontend

# Copiamos los ficheros de la carpeta client a la carpeta del contenedor que expone los aplicativos
COPY . /usr/projects/frontend

# Ejecutamos los siguientes comandos para: actualizar, instalar nvm, instalar node, compilar proyecto
RUN <<EOF
apt-get update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

nvm install 16.14.0
nvm use 16.14.0
nvm default 16.14.0
node -v
npm -v

npm install

npm run build
EOF

######## Paso 2
# Especificamos la imagen de nginx a utilizar
FROM nginx:latest

# Copiamos los ficheros del build anterior a la carpeta publica html de nginx
COPY --from=build /usr/projects/frontend/dist/. /usr/share/nginx/html

# Copiamos el archivo nginx para que el proyecto este vigente
COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos puerto 80
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]