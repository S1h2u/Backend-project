require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.get('/github', (req,res)=>{
  res.send('Shubham');
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login at github</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>backend and deployment</h2>")

})
app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${port}`)
})