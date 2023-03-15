#install npm and run npm build
FROM node:10.15.3-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#install nginx
FROM nginx:1.17.1-alpine

COPY --from=0 /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

