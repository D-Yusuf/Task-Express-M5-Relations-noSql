const { model, Schema } = require('mongoose');

const AuthorSchema = new Schema({
  name: String,
  posts: [{type: Schema.Types.ObjectId, ref: "Posts" }],
});

module.exports = model('Author', AuthorSchema);
