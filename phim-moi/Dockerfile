FROM node:lts AS react

WORKDIR /app

COPY package.json /app

RUN ["npm", "install"]

COPY ./public /app/public

COPY ./src /app/src

RUN ["npm", "run", "build"]

FROM nginx

COPY ./.nginx/* /etc/nginx

COPY --from=react /app/build /build

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]