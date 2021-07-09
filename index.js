const express = require('express')
const app = express()
const port = 3000

let items = [
   { title: "Ratti", price: 450.50, des: "Raththi is the best milk powder", image: "http://www.google.com/logo.png" },
   { title: "Pumking", price: 450, des: "Pumking is the best milk powder", image: "http://www.google.com/logo.png" },
   { title: "Tomato", price: 450.50, des: "Raththi is the best milk powder", image: "http://www.google.com/logo.png" },
   { title: " Astra", price: 450.50, des: "Raththi is the best milk powder", image: "http://www.google.com/logo.png" },
   { title: "Nestemal", price: 450.50, des: "Raththi is the best milk powder", image: "http://www.google.com/logo.png", dicount: 0.04 },
 ]

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/getItems', function(req, res){
   res.send({data:items});
});

app.post('/login',(req,res)=>{
   console.log(req.body)
   res.send({data:"success"})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})