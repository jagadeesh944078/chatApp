const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: { type: String ,required:[true,"First name is required"]},
    lastname: { type: String ,required:[true,"Last name is required"]},
    email: { type: String ,required:[true,"email name is required"]},
    password: { type: String ,required:[true,"password name is required"]},
});

var user = mongoose.model('user', userSchema);

function userModel() {

}

userModel.prototype.save = (data, callback) => {

    console.log("req on model 20: ",data);
    
    var newData = new user(data);
    
    newData.save((error, result) => {
        if (error) {
            callback(error);
        } else {
            console.log("data on user model26 : " , result);
            callback(null, result);
        }
    })
}
userModel.prototype.login = (body, callback) => {
    user.find({ 'username': body.email }, (err, data) => {
            if (err) {
                    return callback(err);
            } else if (data.length > 0) {
                    bcrypt.compare(body.password, data[0].password, function (err, res) {
                            if (err) {
                                    return callback(err);
                            } else if (res) {
                                    console.log(data);

                                    return callback(null, data);
                            } else {
                                    return callback("Incorrect password").status(500);
                            }
                    });
            } else {
                    return callback("Invalid User ");
            }
    })
}


module.exports = new userModel();