const { insertUser, findByEmail } = require("../models/User");

require('dotenv').config();

const { hashSync, genSaltSync } = require('bcrypt');

const { json } = require("body-parser");

const jwt = require('jsonwebtoken');
//method daftar
module.exports.Daftar = async (req, res) => {
    const { nama, username, password, email } = req.body;
    const cek = await findByEmail(email).catch(e => res.status(500).json({ error: true, errors: e }));
    //cek apakah email sudah terdaftar
    if (cek.length >= 1) {
        res.status(400).send({
            error: true,
            errors: "Email sudah didaftarkan!",
        });
    } else {
        if (!email && !username && !password && !nama) {
            res.status(400).send({
                error: true,
                errors: "Semua field masih kosong!",
            });

        } else {

            const passwordHash = hashSync(password, genSaltSync(10));
            const result = await insertUser(nama, username, email, passwordHash).catch(function (error) {
                res.status(500).json({
                    error: true,
                    errors: error,
                });
                res.end();
            });
            //create token
            const payload = {
                id: result.id,
                email: email,
                nama: nama,
            }
            //create token jwt
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "5h"
            });
            //send stauts
            res.status(200).json({
                status: true,
                token: token,
            })
        }
    }


}