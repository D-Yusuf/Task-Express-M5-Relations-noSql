const Post = require('../../models/Post');
const Author = require("../../models/Author")
const Tag = require("../../models/Tag")

exports.createTag = async(req, res, next)=>{
  try {
    const text = req.body.text
    await Tag.create({text})
    return res.status(201).json(text)
  } catch (error) {
    next(error)
  }
}
