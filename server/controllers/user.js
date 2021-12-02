//const db = require("../config/db.js");

const {
    v4: uuidv4
} = require('uuid');

const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.getAll = (req, res) => {
    db.query("SELECT * FROM utilisateur", (err, result) => {
        if (err) res.json({
            err: "Erreur(s) liée(s) à la base de données.",
            infos: err
        });
        else res.json(result);
    })
}
