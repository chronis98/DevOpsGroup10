#install npm
FROM node:19.7.0-alpine AS node-builder

WORKDIR /cms

COPY cms/package*.json ./

RUN npm install

COPY cms/. .

RUN npm run build

#install nginx and copy build files
FROM nginx:1.23.3-alpine

COPY --from=node-builder /cms/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
