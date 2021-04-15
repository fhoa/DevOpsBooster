FROM node:12 as builder
ARG BACKEND_URL
ENV REACT_APP_BACKEND_URL=$BACKEND_URL

ADD . /src
WORKDIR /src

RUN npm install --only=production
RUN npm run build

FROM nginx
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /src/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]