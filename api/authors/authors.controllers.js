const Author = require("../../models/Author")
const getAuthors = async(req,res,next)=>{
    try {
        const authors = await Author.find()
        return res.status(200).json(authors)
    } catch (error) {
        next(error)
    }
}
const addAuthor = async(req, res, next)=>{
    try {
        const newAuthor = await Author.create(req.body)
        return res.status(201).json(newAuthor)
    } catch (error) {
        next(error)
    }
}

module.exports = {getAuthors, addAuthor}