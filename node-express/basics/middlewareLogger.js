const logger=(request, response, next)=>{
    console.log('Logging...!');  //If it is json object, sets to request.body then passes control to next()
    next();
}

module.exports=logger;