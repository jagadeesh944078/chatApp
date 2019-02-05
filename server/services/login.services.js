const loginmodel = require('../app/model/user.model')
exports.login = (data, callback) => {
    loginmodel.save(data, (error, result)=> {
    
        if (error) {
            callback(error);
        }
        else {
            callback(null,result);
        }

    });
}