FROM node:16 as builder
WORKDIR /usr/src/app
ARG backend_route
ENV API_BASE_URL=$backend_route
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM bitnami/nginx:latest
COPY --from=builder /usr/src/app/www /opt/bitnami/nginx/html
COPY mkg.ghh5.unimedizin-mainz.de.conf /opt/bitnami/nginx/conf/bitnami/mkg.ghh5.unimedizin-mainz.de.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]