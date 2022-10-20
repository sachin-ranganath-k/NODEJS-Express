const { response } = require("express");
const express2 = require("express");
const app = express2();

//Different methods
// app.get();
// app.post();
// app.put();
// app.delete();

app.get("/", (request, response) => {
  //If we won't specify 1st parameter, error: cannot GET /
  //Here callback is route handler
  response.send("Hello...!");
});

app.get("/api/details", (request, response) => {
  //We need to get the details from the database (Real World)
  response.send([1, 2, 3, 4]); //o/p : [1,2,3,4]
});

//To get a single perticular detail
app.get("/api/details/:detailId/:year/:month", (request, response) => {
  //We need to get the details from the database (Real World)

  response.send(request.params);

  // /api/details/:detailId
  response.send(request.params.detailId);

  //response.send is to send data to client
  response.send([1, 2, 3, 4]);
});

//Next we need to listen the port
const port = process.env.PORT || 3000; //if set, we use process.env.PORT else 3000
app.listen(port, () => {
  //Here callback executes once the app starts listening on the given port
  console.log(`Listening on port ${port} ..`);
});
