FROM node as buildProd
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


## Production

FROM nginx:alpine
COPY --from=buildProd app/dist/portfolio/browser /usr/share/nginx/html
