console.log("Executes First");
const data = fun(1, function(user){
    console.log('User', user)
});
console.log("Executes Second");

function fun(id, callback) {
  setTimeout(() => {
    console.log("Executes after 3 seconds");
    callback({ id: id, gitHub: "sachin" });
  }, 3000);
}

/* Output
Executes First
Executes Second
Executes after 3 seconds
User { id: 1, gitHub: 'sachin' }
*/

/*************************************************** */

const friendA = () => {
  console.log("friendA called...!");
};

const friendB = () => {
  // callback is the reference for friendA()
  console.log("friendB Called...!");
  friendA();
};

friendB();

/* Output
friendB Called...!
friendA called...!
*/

/************************************** */

getUser(111, (user) => {
  getGitRepos(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from git");
    callback({ id: id, gitHubUserame: "sachin" });
  }, 3000);
}

const getGitRepos = (username, callback) => {
  setTimeout(() => {
    console.log("Calling GitHub API...!");
    callback(["repo1", "repo2", "repo3"]);
  }, 3000);
};


/**Output
    Reading user from git
    Calling GitHub API...!
    Repos [ 'repo1', 'repo2', 'repo3' ]
 */