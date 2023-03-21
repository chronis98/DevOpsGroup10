#install npm
FROM node:19.7.0-alpine AS node-builder

WORKDIR /api

COPY api/package*.json ./

RUN npm install

COPY api/. .

RUN npm run build

CMD ["node", "dist/index.js"]
