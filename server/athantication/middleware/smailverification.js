var async=require("async");
var nodemailer=require('nodemailer');
var crypto=require("crypto");
 
router.get('/forgot',function(req,res){
    res.render('forgot')
})
// router.post('/forgot',function(req,res,next){
//     async.waterfall([
// function(done){
//     crypto.randomBytes('20',function(err,buf){
//     var token=buf.tostring('hex');
//     done(token);

// });
// }
    function(token,done) { 
       User.findone({email:req.body.email},function(err,user){
           if(!user){
               res.flash('err','no email is exist');
               return res.redirect('/forgot');

           }
         user.resetPasswordToken=token;
           user.resetPasswordExpires=Date.now()+360000;
           user.save(function(err){
               done(err,token,user);

           });
       }); 
    }