const { model, Schema } = require('mongoose');

const TagSchema = new Schema({
  text: {type: String, lowercase: true, set: v=>"#"+v, required: true, unique: true},
  posts: [{type: Schema.Types.ObjectId, ref: "Post", required: true}]
});

module.exports = model('Tag', TagSchema);
