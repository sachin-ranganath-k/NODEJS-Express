const Joi = require("joi"); 
const logger=require('./middlewareLogger');
const express2 = require("express");
const app = express2();

app.use(express2.json()); //Returns middleware function that has parameters req, res, next
app.use(express2.urlencoded({extended:true}))
app.use(express2.static('public')); //Used to serve static files. Static files in public folder
app.use(logger);

app.use(function(request, response, next){
  console.log('Authenticating..!');
  next();
});

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


//Handle Post Request
app.post("/api/details", (request, response) => {
  const schema = Joi.object({
    //For newer version
    //   const schema = {   //For older version
    personName: Joi.string().min(5).required(),
  });

  const result = schema.validate(request.body); //Returns an abject
  //   //   const result = Joi.validate(request.body, schema); //Returns an abject
  console.log(result);

  if (result.error) {
    response.status(400).send(result.error.details[0].message);
    return; //After showing error, should not execute next statements
  }
  const personDetail = {
    personId: personDetails.length + 1, //Actually it will be assigned db
    personName: request.body.personName, // .personName is a property in request body (assume)
  };
  personDetails.push(personDetail);
  response.send(personDetail); // Assigned the id in the server. Client needs to know the id
});


app.get("/api/personDetails", (request, response) => {
    response.send(personDetails); 
  });
  