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

COPY frontend/loaderio-b20a5d5dd704d5516eaf1d5e385c862b.txt /usr/share/nginx/html/loaderio-b20a5d5dd704d5516eaf1d5e385c862b.txt

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
