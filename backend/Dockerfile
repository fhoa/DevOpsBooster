FROM node:12

ADD . /src
WORKDIR /src
RUN npm install pm2 -g
RUN npm install --only=production
RUN npm run build

EXPOSE 4000
CMD pm2-runtime ./build/index.js