const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./api/routes/routes");
const mongoose = require('mongoose');
const uri = require('./api/config/db.config').url;

app.use(bodyParser.json());


//app.use(cors);


// app.get('/', (req, res) => {
//     res.send(`Listening on ${ PORT }`);
// })


app.use('/posts', router);

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("connect DB");
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
}).catch(err => {
    console.log('err',err)
});






