const userServices = require('../services/user.services');

exports.registration = (req, res) => {
    var responseResult = {}
    console.log("req",req.body);
    
    userServices.registration(req.body, (error, result) => {
        if(error) {
            responseResult.success = false;
            responseResult.error = error;
            res.status(500).send(responseResult);
        } else {
            responseResult.success = true;
            responseResult.result = result;
            res.status(201).send(responseResult);
        }
    })
}

exports.login = (req, res) => {
var responseresult={}
console.log(req.body);
userServices.login(req.body,(err,result)=>{
if(err){
    responseresult.sucess=false;
    responseresult.err=err;
    res.status(500).send(responseresult);
}
else{
    responseresult.sucess=true;
    responseresult.result=result;
    res.status(201).send(responseresult);
}

})

}
