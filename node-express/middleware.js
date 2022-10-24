const logger=require('./middlewareLogger');
const express2 = require("express");
const app = express2();

app.use(express2.json()); //Returns middleware function that has parameters req, res, next
app.use(logger);

app.use(function(request, response){
  console.log('Authenticating..!');
  next();
});

const personDetails = [
    {
      personId: 1,
      personName: "Sachin",
    },
    {
      personId: 2,
      personName: "Ranganath",
    },
    {
      personId: 3,
      personName: "Kulkarni",
    },
  ];

app.get("/api/personDetails", (request, response) => {
    response.send(personDetails); 
  });
  