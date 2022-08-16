const db = require('../model');
// const dbConnection = db.connectToServer(db.getDb);
const dbConnection = db.getDb();
module.exports.findAll = (req, res) => {
    console.info(dbConnection);
    dbConnection.collection("comments").find().then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
}