FROM node:21.7.2

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./
COPY node_modules ./

# RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]