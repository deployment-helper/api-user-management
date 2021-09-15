FROM node:14.17 as builder
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci
COPY . .
RUN npm run build:webpack

FROM node:14.17.0-alpine
ENV NODE_ENV production
WORKDIR /root/
COPY --from=builder /usr/src/app/dist/* ./
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/package-lock.json ./
EXPOSE 3000
EXPOSE 80
RUN npm ci --only=prod

CMD [ "node" ,"server.js" ]