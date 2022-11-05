// The Promise object represents the completion (or failure) of an asynchronous operation and its resulting value
//3 states
//1. Pending  2.Resolve/Fulfilled   3.Reject

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1)
    reject(new Error("Error occured..!"));
  }, 2000);
});

p.then((result) => console.log("Resolve:", result))
  .catch((error) =>console.log("Reject:", error.message));
