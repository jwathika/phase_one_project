FROM node:18-slim

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENV NAME=.ENV

CMD ["npm", "start"]

#sudo docker build -t node-app .
#sudo docker run -p 3000:3000 node-app