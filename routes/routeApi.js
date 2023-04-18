const expressRoute = require('express').Router();
const {Profile, Topik, Users, Video} = require('../controllers/api');
const { Daftar } = require('../controllers/auth');
//api profile
expressRoute.get('/profile', Profile);
expressRoute.get('/get_topik', Topik);
expressRoute.get('/get_users', Users);
expressRoute.get('/video', Video);
expressRoute.post('/auth/daftar', Daftar);
module.exports = expressRoute;