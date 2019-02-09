const userModel = require('../app/model/user.model')
exports.login = (data, callback) => {
    userModel.login(data, (error, result)=> {
    
        if (error) {
            callback(error);
        }
        else {
            callback(null,result);
        }

    });
}
//const userModel = require('../app/model/user.model')

exports.registration = (data, callback) => {
    userModel.save(data, (error, result) => {
        if (error) {
            callback(error);
        } else {
            callback(null, result);
        }
    })
}