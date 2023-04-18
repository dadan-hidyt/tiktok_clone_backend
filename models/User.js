const db = require('../util/db');
module.exports.findByEmail = (email) => {
    return new Promise(function(resolve,rejected){
        db.query("SELECT email FROM users WHERE email=?", [email], function(error,result){
            if ( error ) {
                return rejected(error);
            } else {
                return resolve(result);
            }
        })
    });
}
module.exports.insertUser = async (...data) => {
    return new Promise((resolve, rejected) => {
        db.query("INSERT INTO users (nama,username,email,password) VALUES(?,?,?,?)", [...data], function (error, result) {
            if (error) {
                return rejected(error);
            } else {
                return resolve(result);
            }
        });
    })
}