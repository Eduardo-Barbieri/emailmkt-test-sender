const express = require("express")
const bodyParser = require('body-parser');
const router = require("./routes/router.js")

const app = express()
PORT = 5000

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/' , router);

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));