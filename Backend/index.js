const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
const BlogModel=require('./model')
require('./connection')
//Write missing code here

//Write your POST API here

app.get("/blogs", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.post('/add',async (req,res)=>{
  try {
      var item=req.body
      const datasave= new BlogModel(item)
      const saveddata=await datasave.save()
      res.send('post succesful')
  } catch (error) {
      console.log(error)
  }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
