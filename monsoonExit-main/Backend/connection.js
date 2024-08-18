const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://abhinavnairb21cs1202:abhinav2003@cluster0.4nj2edp.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
