FROM node:18-slim

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3000

ENV NAME=.ENV

CMD ["yarn", "start"]

#sudo docker build -t node-app .
#sudo docker run -p 3000:3000 node-app