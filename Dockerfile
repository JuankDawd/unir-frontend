FROM node:16

WORKDIR /usr/src/inventory/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173 

CMD ["npm", "run", "dev"]