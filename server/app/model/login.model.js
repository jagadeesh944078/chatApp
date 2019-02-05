const monogoose=require('mongoose')

function userModel(){

}
userModel.prototype.save=(data,callback)=>{
    console.log(data);

var newData=new user1(data);
newData.save((err,result)=>{
if(err){
    callback(err)
}
else{
    callback(result)
}
})
var findPeopleByName = function(firstname, done) {
    user.find({"username":firstname},(err,data)=>{
    if(err) 
    {callback(err)}
    else{
     callback(null,data)}
      })  
    
    };
    var findPeopleByName = function(password, done) {
        user.find({"password":password},(err,data)=>{
        if(err){ callback(err)}
          
        else{
            callback(data)
                  }          })  
        
        };
}