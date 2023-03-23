#install npm
FROM node:19.7.0-alpine AS node-builder

WORKDIR /frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend/. .

RUN npm run build

#install nginx and copy build files
FROM nginx:1.23.3-alpine

COPY --from=node-builder /frontend/dist /usr/share/nginx/html

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

#copy loader.io file
COPY frontend/loaderio-b3fe77e500b87148d2b5d4665ff9cdbe.txt /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
