const monogoose=require('mongoose')

function userModel(){

}
userModel.prototype.save=(data,callback)=>{
    console.log(data);

var newData=new user1(data);
var findPeopleByName = function(email, data) {
    user.find({"username":email,"password":password},(err,data)=>{
    if(err) 
    {callback(err)}
    else{
     callback(null,data)}
      })  
    
    };
 
}