const express = require("express");
const conntact = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(conntact.findAll)
    .post(conntact.create)
    .delete(conntact.deleteAll);

router.route("/favorites")  
    .get(conntact.findAllFavorite);

router.route("/:id")
    .get(conntact.findOne)
    .put(conntact.update)
    .delete(conntact.delete);

module.exports = router;