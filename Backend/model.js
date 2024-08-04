//Write missing codes here
const mongoose=require('mongoose')
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
const BlogData = mongoose.model('blog', schema);
module.exports = BlogData;
//Write missing codes here
