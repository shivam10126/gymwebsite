const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// mongodb
const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    phone:String,
    query:String
    
  });

  const contact = mongoose.model('contact', contactSchema);
// static files

app.use(express.urlencoded({ extended: false }))


app.get("/contact",(req,res)=>{
    res.render('contact.pug')
})

app.post('/contact',(req, res) => {
    myData = new contact(req.body);
    console.log(myData);
    myData.save().then(()=>{
    res.send("form filled up succesfully")
}).catch(()=>{
        res.send("oops!! error occured while filling form")
     
    })
})

app.listen(3000);