const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose")
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "hybr1d-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./models/index");
const Product = require("./models/product");
mongoose.connect(db.connection_url, {useNewUrlParser: true,}
                ).then(() => {
                    console.log("Successfully connect to MongoDB.");
                    initialize();//will be used to created default products
                }).catch(error => {
                    console.error("Connection error", error);
                    process.exit();
                });
//to populate products
function initialize(){
    
    Product.insertMany([
        {name: 'cricket ball',price:25}, 
        {name:'running shoes', price: 50}, 
        {name: 'tennis racket', price:100},
        {name: 'basket ball',price:150},
        {name: 'boxing gloves',price:200}
],
         (error, result)=> {
             if(error){
                 console.log(error)
             }
             console.log(result);
         })
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hybr1d." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});