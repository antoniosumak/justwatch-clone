FROM node:lts-alpine as builder

WORKDIR /movie-app
ENV PATH /movie-app/node_modules/.bin:$PATH
COPY package.json .

RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /movie-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
