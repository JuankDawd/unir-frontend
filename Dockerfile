FROM node:16

WORKDIR /usr/src/inventory/

COPY package*.json ./

RUN npm install

COPY . .

# Exponer el puerto 3000
EXPOSE 3000

CMD ["npm", "run", "dev"]