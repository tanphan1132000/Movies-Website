FROM node:lts

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 5000

RUN ["npm", "run", "build"]

CMD ["npm", "start"]