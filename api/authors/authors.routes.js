const { getAuthors, addAuthor } = require("./authors.controllers")

const router = require("express").Router()

router.route("/")
    .get(getAuthors)
    .post(addAuthor)

module.exports = router