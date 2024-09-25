const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: "Author", required: true},
  tags: [{type: Schema.Types.String, ref: "Tag"}]
});

module.exports = model('Post', PostSchema);
