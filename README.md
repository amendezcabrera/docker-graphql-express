A GraphQL API built with Express ready to work

# Install
* Clone this repo:

``git clone https://github.com/amendezcabrera/docker-graphql-express.git``
* Enter the folder;

``cd docker-graphql-express``

* Build and run the Docker container:

``docker-compose up --build``

* Open the `http://localhost:4000` URL in your preferred browser and type:

```json
{
  hello
}
```

Press `start` and you will receive a JSON response:
```json
{
  "data": {
    "hello": "Hello world!!"
  }
}
```

That was only an small test, you can open the `index.js` file placed in the `src` folder with your favourite editor and start developing the GraphQL API following your requirements

## Extra knowledge

This is an unfinished work, you will see there are some models in the schema but they are not working as expected, if you ask for a book with ID 1:

```json
{
  book(id: 1)
}
```

You will receive only a test message, it is up to you to finish this example and return the right response