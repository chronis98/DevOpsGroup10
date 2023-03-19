install nginx: apt-get update && apt-get install -y nginx
install-frontend: cd frontend && npm install && npm run build
move-frontend: mv dist /usr/share/nginx/html
build-backend: cd ../api && npm install && npm run build