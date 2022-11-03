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

app.put("/api/details/:id", (request, response) => {
  //Look for the perticular personDetail
  //Error 404, if not exists
  const details = personDetails.find(
    (c) => c.personId === parseInt(request.params.personId)
  );
  if (!details) {
    response.status(404).send("Details not found for the given ID");
  }

  //Validation
  //If invalid, return 400- Bad Request
//   const { error } = validatePersonDetail(request.body); //result.error
//   if (error) {
//     response.status(400).send(error.details[0].message);
//     return;
//   }
  //Everything is good, Update the course
  //Return the updated course
  personDetails.personName = request.body.personName;
  response.send(details);
});

// const validatePersonDetail = (personDetails) => {
//   const schema = Joi.object({
//     personName: Joi.string().min(5).required(),
//   });

//   return schema.validate(personDetails);
// };
