FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./
COPY node_modules ./

# RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]