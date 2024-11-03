const express = require("express");
const app = express();

require("dotenv").config();
require("./db");

const port = process.env.PORT || 5000;

const pictureRouters = require("./routes/picture");

app.use("/pictures", pictureRouters);  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});