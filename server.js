const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// mongodb
const regSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
  });

  const register = mongoose.model('register', regSchema);
// static files
app.set('view-engine','ejs')
app.use(express.urlencoded({ extended: false }))

// login
app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.post('/login',(req,res)=>{
   mydata = req.body;
})


// register
app.get('/register',(req,res)=>{
    res.render('register.ejs')
})

app.post('/signup', async (req, res) => {
       myData = new register(req.body);
       console.log(myData);
       myData.save().then(()=>{
       res.send("registration compelete")
       }).catch(()=>{
        res.status(404).send(" could not register!!! try again")
       })
   
   
  })



app.listen(3000);