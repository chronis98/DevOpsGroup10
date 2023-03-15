#install npm and run npm build
FROM node:19.7.0-alpine

COPY frontend/package*.json ./

RUN npm install

COPY . .

RUN npm run build

#install nginx and copy build files
FROM nginx:1.23.3-alpine

COPY --from=0 /frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



