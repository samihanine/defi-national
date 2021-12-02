const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const user = require('./routes/user');
const station = require('./routes/station');
const sauveteur = require('./routes/sauveteur');
const sauveteur_sauvetage = require('./routes/sauveteur_sauvetage');
const sauvetage = require('./routes/sauvetage');
const bateau = require('./routes/bateau');


app.use(cors());
app.use(express.json({limit: '3mb'}));
app.use(express.urlencoded({limit: '3mb', extended: true}));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.get("/", (req, res) => {
    res.send("Serveur Opérationnel")
});

app.use('/user', user);