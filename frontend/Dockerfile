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

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
