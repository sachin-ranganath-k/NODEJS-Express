const Joi = require("joi"); //Returns  class
const express2 = require("express");
const app = express2();

app.use(express2.json()); //Returns piece of middleware

const port = process.env.PORT || 3000; //if set, we use process.env.PORT else 3000
app.listen(port, () => {
  //Here callback executes once the app starts listening on the given port
  console.log(`Listening on port ${port} ..`);
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

//Handle all data
app.get("/api/details", (request, response) => {
  //We need to get the details from the database (Real World)
  response.send(personDetails); //Returns all personDetails Data
});

//Handle data based on id
app.get("/api/details/:personId", (request, response) => {
  //find() finds the data based on given criteria and returns true/false

  // request.params.personId returns string. That needs to be converted to integer
  const details = personDetails.find(
    (c) => c.personId === parseInt(request.params.personId)
  );
  if (!details) {
    //404 error can be seen in the chrome network tab
    response.status(404).send("Details not found for the given ID");
  } else {
    response.send(details);
  }
});

//Handle Post Request
app.post("/api/details", (request, response) => {
  const schema = Joi.object({
    //For newer version
    //   const schema = {   //For older version
    personName: Joi.string().min(3).required(),
  });

  const result = schema.validate(request.body); //Returns an abject
  //   const result = Joi.validate(request.body, schema); //Returns an abject
  console.log(result);

  if (!request.body.personName || request.body.personName.length < 3) {
    //400 Bad Request
    response.status(400).send("Name is required with min 3 characters");
    return; //After showing error, should not execute next statements
  }
  const personDetail = {
    personId: personDetails.length + 1, //Actually it will be assigned db
    personName: request.body.personName, // .personName is a property in request body (assume)
  };
  personDetails.push(personDetail);
  response.send(personDetail); // Assigned the id in the server. Client needs to know the id
});
