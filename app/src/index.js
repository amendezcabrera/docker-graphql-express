var express = require('express');
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');

var Book = [
    {
        "id": 1,
        "title": "El hombre invisible",
        "price": "10.95E",
        "author": "Autor 1"
    },
    {
        "id": 2,
        "title": "un mundo feliz",
        "price": "20.30E",
        "author": "Isaac Asimov"
    },
];

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`  
  type Book {
    id: ID
    title: String
    price: String
    author: Author
  }
  
  type Author {
    id: ID
    firstName: String
    lastName: String
    books: [Book]
  }
  
  type Query {
    hello: String
    book(id: ID!): String
    author(id: ID!): Author
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!!';
    },
    book: function ({id}) {
        return "Return ID " + id + " book";
    },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');