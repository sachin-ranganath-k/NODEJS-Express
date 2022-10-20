const { response } = require("express");
const express2 = require("express");
const app = express2();

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

app.get("/api/details", (request, response) => {
  //We need to get the details from the database (Real World)
  response.send([1, 2, 3, 4]); //o/p : [1,2,3,4]
});

app.get("/api/details/:personId", (request, response) => {
  //find() finds the data based on given criteria and returns true/false

  // request.params.personId returns string. That needs to be converted to integer
  const details = personDetails.find(
    (c) => c.personId === parseInt(request.params.personId)
  );
  if (!details) {
    response.status(404).send("Details not found for the given ID");
  } else {
    response.send(details);
  }
});
