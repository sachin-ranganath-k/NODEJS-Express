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
  response.send([1, 2, 3, 4]); //o/p : [1,2,3]
});

//Next we need to listen the port
app.listen(3000, () => {
  //Here callback executes once the app starts listening on the given port
  console.log("Listening..");
});
