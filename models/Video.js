const db = require('../util/db');
//untuk mendapatkan semua video
module.exports.getAllVideo = () => {
    return new Promise(function (resolve, rejected) {
        db.query("SELECT v.*, u.nama,u.username FROM videos v INNER JOIN users u ON u.id = v.upload_by", [], function (error, result) {
            if (error) {
                return rejected(error);
            } else {
                resolve(result);
            }
        })
    });
}
