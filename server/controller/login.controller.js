const loginServices=require('../services/login.services')
exports.login = (req, res) => {
var responseresult={}
console.log(req.body);
loginServices.login(req.body,(err,result)=>{
if(err){
    responseresult.sucess=false;
    responseresult.err=err;
    res.status(500).send(responseresult);
}
else{
    responseresult.sucess=true;
    responseresult.result=results;
    res.status(201).send(responseresult);
}

})

}
