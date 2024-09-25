const express = require('express');
const router = express.Router();
const {createTag} = require("./tags.controllers")
router.post('/', createTag);

module.exports = router;
