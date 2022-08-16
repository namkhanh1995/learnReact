// const db = require('../model');
// // const dbConnection = db.connectToServer(db.getDb);
// const dbConnection = db.getDb();
// module.exports.findAll = (req, res) => {
//     console.info(dbConnection);
//     dbConnection.collection("comments").find().then(data => {
//         console.log(data);
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
// }

const postModel = require("../models/postModel");

module.exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    console.log('post', posts);
    res.status(200).json(posts);
  }catch(err){
    res.status(500).json({error : err});
  }
};
module.exports.createPost = (req, res) => {
  const post = new postModel({
    title: 'test',
    content: 'test'
  });
  post.save();
};