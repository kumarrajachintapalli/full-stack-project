const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
var serviceAccount = require("./key.json");
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
var express = require('express')  
var app = express()  
app.use(express.static('public'));


app.get('/loginpage', function (req, res) {  
    res.sendFile( __dirname + "/public/" + "loginpage1.html" );
    })  

app.get('/signupsubmit', function (req, res) {  
    console.log(req);
    db.collection('users').add({
      name:req.query.name,
      email:req.query.email,
      password:req.query.passwords
  }).then(() =>{
    res.sendFile( __dirname + "/public/" + "loginppage.html" );
    
  })
})

// app.get('/loginpage', function (req, res) {  
//     res.sendFile( __dirname + "/public/" + "login.html" );
//     })  
app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')  
    })