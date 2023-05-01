FROM node:alpine 
ENV NODE_ENV development
WORKDIR /React-app
COPY ./package.json /React-app
RUN npm install 
COPY . .
CMD npm start 
