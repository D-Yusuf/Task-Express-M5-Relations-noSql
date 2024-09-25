const Post = require('../../models/Post');
const Author = require("../../models/Author")
const Tag = require("../../models/Tag")
exports.fetchPost = async (postId, next) => {
  try {
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    next(error);
  }
};

exports.postsCreate = async (req, res, next) => {
  try {
    const {authorId} = req.params
    const newPost = await Post.create(req.body);
    const author = await Author.findByIdAndUpdate(authorId, {$push: {posts: newPost._id}})
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.postsDelete = async (req, res, next) => {
  try {
    await Post.findByIdAndRemove({ _id: req.post.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  try {
    const tags = req.body.tags
    
    if(tags){
      for(let i=0;i<tags.length;i++){
        
        const a = await Tag.find({text: tags[i]}) }
        if(a[0].posts.includes(req.params.postId)){
          await Tag.create({text: tags[i]})
          // break;
        }
  
        const addedTags = await Tag.find({text: tags})
        await Tag.updateMany({text: tags}, {$push: {posts: req.params.postId}})
        // if(!addedTags){
          //   for(let i=0;i<tags.length;i++){
            //     await Tag.create({text: tags[i]})
            
            //   }
            
            // }
            
            // console.log(addedTags, "ad")
            for(let i=0; i<addedTags.length; i++){
              console.log("DAD")
              await Post.findByIdAndUpdate(req.params.postId, {$push: {tags: tags[i]}})
            }
            // await Post.findByIdAndUpdate(req.params.postId, req.body)
            return res.status(204).end();
          }
      
      
      await Post.findByIdAndUpdate(req.post.id, req.body);
    res.status(204).end();
  }
  catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("author");
    res.json(posts);
  } catch (error) {
    next(error);
  }
};
