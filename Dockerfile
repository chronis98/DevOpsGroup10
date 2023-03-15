#install npm and run npm build
FROM node:10.15.3-alpine

COPY frontend/package*.json ./

RUN npm install

COPY . .

RUN npm run build

#install nginx and copy build files
FROM nginx:1.16.0-alpine

COPY --from=0 /frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



