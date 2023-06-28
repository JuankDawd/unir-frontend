# Dockerfile versión 3

FROM node:18

# Dirección de la carpeta donde se guardará nuestro código
WORKDIR /usr/src/inventory/

COPY package*.json ./

RUN npm install

COPY . .