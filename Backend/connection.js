const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://vaishnav:vaishnav123@cluster0.clzscyr.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
