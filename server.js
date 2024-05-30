const express = require('express')
const cors = require("cors");
const mongoose = require('mongoose')
const app = express()
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const productRoute = require("./routes/product");

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

app.use("/", productRoute);

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, ()=> {
        console.log(`Node API app is running on port ${process.env.PORT}`)
    });
}).catch((error) => {
    console.log(error)
})
  