const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const app = express()
const userModel=require('./models/userModel')
const cors=require('cors')
app.use(bodyParser.json());

app.use(cors({ origin:'https://saquib007.netlify.app/'}));  //'http://localhost:3001' || 'http://localhost:3002'||
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//----

mongoose.connect("mongodb+srv://saquib007:Jdo1pCEGwZpOgtdD@cluster0.rvsi5lf.mongodb.net/test", {
    useNewUrlParser: true
})
.then(()=> console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.post('/form-submit', async  (req, res) => {
try {
    const data= req.body;

const newuser=await userModel.create(data)
return res.status(201).send({msg:"success",data:newuser})
 
} catch (error) {
    return res.status(500).send({msg:error.message})

}    
      });

      app.get('/test',async(req,res)=>{
        return res.status(200).send('fine')
      })

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on Port " + (process.env.PORT || 3000))
})



