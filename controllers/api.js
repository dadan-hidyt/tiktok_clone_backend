const { getAllVideo } = require('../models/Video');
module.exports.Profile = (req, res) => {
    res.status(200).json(req.body)
}
module.exports.Topik = (req, res) => {
    res.send("TOPIK");
}
module.exports.Users = (req, res) => {
    res.send("dada");
}

module.exports.Video = async (req, res) => {
    //get video from model
    const video = await getAllVideo().catch((error) => {
        res.status(500).json({
            error: true,
            errors: error,
        })
    });
    //check apakah video ada
    res.status(200).json({
        error: false,
        status: "OK",
        data: video,
    });
}