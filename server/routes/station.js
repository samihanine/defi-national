const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/station');

router.use(express.json());

router.post("/auth", ctrl.getAll);

router.get("/", ctrl.getAll); // get

router.get("/:id", ctrl.getAll); // get

router.post("/", ctrl.getAll); // insert

router.delete("/", ctrl.getAll); // delete

router.put("/", ctrl.getAll); // update

module.exports = router;