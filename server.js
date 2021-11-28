let express = require("express")
let mongodb =require("mongodb").MongoClient
let ObjectId = require('mongodb').ObjectId
let ourApp = express()
let db
let port = process.env.PORT
if(port==null||port==""){
  port=3000
}
ourApp.use(express.static("public"))

let connectionString = "mongodb+srv://Sainath:Lehrayi556@querystand.0szgo.mongodb.net/QueryStand1?retryWrites=true&w=majority"
mongodb.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true},(err,client) =>{
    db = client.db()
    ourApp.listen(port)
})
ourApp.use(express.json())
ourApp.use(express.urlencoded({extended:false}))


ourApp.get("/", (req,res)=>{
    db.collection('questions').find().toArray((err,questions)=>{
        res.send(`<!DOCTYPE html>
  <html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Query Stand</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  </head>
  <body bgcolor="grey">
  <div class="container">
  <h1 class="display-4 text-center py-1">Query Stand</h1>
  
  <div class="jumbotron p-3 shadow-sm">
  <form id="our-form" action="/queries" method="POST">
  <div class="d-flex align-items-center">
  <input id="our-field" name="question" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
  <button class="btn btn-primary">Post question</button>
  </div>
  </form>
  </div>
  
  <ul id="question-list" class="list-group pb-5">
    
  </ul>
  
  </div>

  <script>
  let questions = ${JSON.stringify(questions)}
  </script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="/browser.js"></script>
  </body>
  </html>`)
  })
    
})
ourApp.get('/x',(req,res)=>{
res.send(`<html>
    <head>
        <title>query stand</title>
        <link rel="stylesheet" href="styles.css">
        <style>
        body{
        background-image:url("Q8.jpg");
        background-repeat:no-repeat;
        background-attachement:fixed;
        background-size:cover;
        }
        </style>
    </head>
    <body>
    
      <div id="div1">
        <ul id="menu">   
       <li><a href="signpage.html ">LOGIN</a></li>
       <li><a href="registerpage.html">REGISTER</a></li>
       </ul>
    </div>
</body>
</html>`)
})
ourApp.get("/signpage.html",(req,res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="styles.css">
      <title>Login</title>
  </head>
  <body bgcolor="grey">
      <div id="div1">
      <ul id="menu">
      <li><a href="signpage.html">LOGIN</a></li>
      <li><a href="registerpage.html">REGISTER</a></li>
      <li><a href="x">HOME</a></li>
      </ul>
      </div>
      <form>
          
              <table width="100%">
                  <tr>
                      <td width="50%" align="right">EMAIL:</td>
                      <td width="50%" align="left"><input type="email"></td>
                  </tr>
                  <tr>
                      <td width="50%" align="right">PASSWORD:</td>
                      <td width="50%" align="left"><input type="password"></td>
                  </tr>
                  <tr>
                  <td  width="50%" align="right"><input type="submit" value="CHECK"></td>
                      <td  width="50%" align="left"><div id="div4">
                      <ul id="menu1">
                      <li><a href="/">Login</a></li></td>
      
  
                  </tr>
              </table>
          
      </form>
  </body>
  </html>`)
})
ourApp.get("/registerpage.html",(req,res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="styles.css">
      <title>Register</title>
  </head>
  <body bgcolor="grey">
      <div id="div1">
          <ul id="menu">
          <li><a href="signpage.html">LOGIN</a></li>
          <li><a href="registerpage.html">REGISTER</a></li>
          <li><a href="x">HOME</a></li>
          </ul>
          </div>
          <form>
               <div id="div1">
              <table width="100%">
                  <tr>
                      <td width="50%" align="right">NAME:</td>
                      <td width="50%" align="left"><input type="text"></td>
                  </tr>
                  <tr>
                      <td width="50%" align="right">EMAIL:</td>
                      <td width="50%" align="left"><input type="email"></td>
                  </tr>
                  <tr>
                      <td width="50%" align="right">PASSWORD:</td>
                      <td width="50%" align="left"><input type="password"></td>
                  </tr>
                  <tr>
                      <td width="50%" align="right">RE-ENTER PASSWORD:</td>
                      <td width="50%" align="left"><input type="password"></td>
                  </tr>
                  <tr>
                      <td width="50%" align="right">GENDER:</td>
                      <td width="50%" align="left"><input type="radio"name="G/">Male<input type="radio" name="G/">Female<input type="radio" name="G/">other</td>
                  </tr>
                  <tr>
                      <td width="50%" align="right">COLLEGE/SCHOOL NAME:</td>
                      <td width="50%" align="left"><input type="text"></td>
                  </tr>
                  <tr>
                      <td width="50%" align="right">QUALIFICATION:</td>
                      <td width="50%" align="left">
                          <select>
                              <option>select</option>
                              <option value="1">B-TECH</option>
                              <option>M-TECH</option>
                              <option>1O th</option>
                              <option>INTER/DIPLOMO</option>
                              <option>DEGREE</option>
                              <option>OTHER</option>
                          </select>
                      </td>
                  </tr>
                  <td width="50%" align="right"><input type="checkbox"></td>
                      <td width="50%" align="left">I agree all terms and conditions</td>
  
                  <tr>
                      <td  width="50%" align="right"><input type="reset" value="RESET"></td>
                      <td  width="50%" align="left"><input type="submit" value="REGISTER"></td>
                      
                  </tr>
                  <tr>
                  <td></td>
                  <td  width="50%" align="left"><div id="div3">
                      <ul id="menu1">
                      <li><a href="signpage.html">Login page</a></li></td>
                  </tr>
              </table>
          </div>
      </form>
      
  </body>
  </html>`)
  
})
ourApp.get('/view-answers',(req,res)=>{
  db.collection('answers').find().toArray((err,answers)=>{
    res.send(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Query-stand</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
</head>
<body>
<div class="container">

<h1 class="display-4 text-center py-1">Answers</h1>

<ul id="answer-list" class="list-group pb-5">
${answers.map(function(item) {
  return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
  <span class="item-text">${item.text}</span>
  
  </li>`
 }).join('')}
</ul>

</div>

<script>
let answers = ${JSON.stringify(answers)}
</script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="/browser.js"></script>
</body>
</html>`)
})
})

ourApp.post('/answers',(req,res)=>{
  db.collection("answers").insertOne({text: req.body.text})
  res.send("success")
})

ourApp.post("/queries",(req,res) =>{
    db.collection("questions").insertOne({text: req.body.text},(err,info) =>{
      res.json({_id:info.insertedId.toString(),text:req.body.text})
  })
    
  })



ourApp.post('/edit-question',(req,res) =>{
  db.collection('questions').findOneAndUpdate({_id: new ObjectId(req.body.id)},{$set:{text: req.body.text}},()=>{
    res.send("success")
  })
})
  ourApp.post('/delete-question',(req,res) =>{
    db.collection('questions').deleteOne({_id: new ObjectId(req.body.id)},()=>{
      res.send("success")
    })
  
}) 

ourApp.post('/edit-answer',(req,res) =>{
  db.collection('answers').findOneAndUpdate({_id: new ObjectId(req.body.id)},{$set:{text: req.body.text}},()=>{
    res.send("success")
  })
})

ourApp.post('/delete-answer',(req,res) =>{
  db.collection('answers').deleteOne({_id: new ObjectId(req.body.id)},()=>{
    res.send("success")
  })

}) 
