const postModel = require("../models/postModel");

module.exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  }catch(err){
    res.status(500).json({error : err});
  }
};
module.exports.createPost = async (req, res) => {
  try {
    console.log('post', req.body);
    const newPost = req.body;
    const post = new postModel(newPost);
    await post.save();
    res.status(200).json(post);
  }catch(err){
    res.status(500).json({error : err});
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await postModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true});
    res.status(200).json(post);
  }catch(err){
    res.status(500).json({error : err});
  }
};