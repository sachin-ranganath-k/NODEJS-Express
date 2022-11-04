// console.log("Executes First");
// setTimeout(() => {
//   console.log("Executes after 2 seconds");
// }, 2000);
// console.log("Executes Second");

/********************************** */

console.log("Executes First");
const data = fun(1);
console.log(data)
console.log("Executes Second");

function fun(id) {
  setTimeout(() => {
    console.log("Executes after 3 seconds");
    return { id: id, gitHub: "sachin" };
  }, 3000);
}

/* Output
    Executes First
    undefined (caller will get id after 3 seconds)     
    Executes Second
    Executes after 3 seconds

    To avoid this we have async operations 
    Callbacks
    Promises
    async/await
*/

