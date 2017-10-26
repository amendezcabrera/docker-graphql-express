FROM ontouchstart/graphql-express
WORKDIR /app
COPY package.json /app
COPY src /app/src
EXPOSE 4000
RUN npm install -g nodemon
RUN npm install
CMD [ "nodemon", "-L", "src" ]