
exports.getAll = (req, res) => {
    db.query("SELECT * FROM bateau", (err, result) => {
        if (err) res.json({
            err: "Erreur(s) liée(s) à la base de données.",
            infos: err
        });
        else res.json(result);
    })
}
