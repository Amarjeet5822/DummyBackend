const express = require('express'); 
const {connectToDB} = require('./config/db');
const authRoutes  = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
require("dotenv").config();
const app = express();

//middleware to pass the request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const whitelist = [process.env.FE_URL, process.env.DEPLOY_FE_URL];

const corsOptionsDelegate = (req, callback) => {
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    callback(null, {
      origin: req.header("Origin"), //// Automatically reflects the request's origin if in the whitelist
      credentials: true,
      methods: "GET,HEAD,PATCH,POST,PUT,DELETE",
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    }); // reflect (enable) the requested origin in the CORS response
  } else {
    callback(null, {origin: false}); // Deny CORS if not in whitelist
  }
};
app.use(cors(corsOptionsDelegate));


app.use("/auth", authRoutes);

app.use("/products", productRoutes);


const PORT = process.env.PORT || 9999;

app.listen(PORT, async() => {
  connectToDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
  
});