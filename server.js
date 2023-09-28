const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
var serviceAccount = require("./key.json");
initializeApp({
  credential: cert(serviceAccount)
});
var express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser =require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
const db = getFirestore();
var express = require('express');
const { render } = require('ejs');
app.use(express.static('public'));
var passwordHash = require('password-hash');
app.get('/', function (req, res) {  
res.sendFile( __dirname + "/public/" + "signuppage.html" );
})  
app.get('/loginpage', function (req, res) {  
    res.sendFile( __dirname + "/public/" + "loginpage.html" );
    })  
 
app.get('/signuppage', function (req, res) {  
    res.sendFile( __dirname + "/public/" + "signuppage.html" );
    })
app.post('/signupsubmit', function (req, res) {  
  console.log(req.body);
  db.collection('musicplayertest')
  .where("email","==",req.body.email)
  .get()
  .then((docs) => {
    if(docs.size>0){
      res.send("<h1>oops!... account already exists with this email</h1><br><br><br><h2>Please login</h2><br><h2>Or Try Again With Another Email</h2>");
    }
    else{
   db.collection('musicplayertest').add({
     first_name:req.body.first_name,
     second_name:req.body.last_name,
     email:req.body.email,
     password:passwordHash.generate(req.body.password)
 }).then(() =>{
  res.sendFile( __dirname + "/public/" + "loginpage.html" );
 })
}
})
 })
  app.post('/loginsubmit', function (req, res) {  
  console.log(req.body.email)
  db.collection('musicplayertest')
  .where("email","==",req.body.email)
  .get()
  .then((docs) => {
    var verified = false;
    docs.forEach((doc) => {
      verified = passwordHash.verify(req.body.password, doc.data().password)
    });
      console.log(docs.size)
      if(verified){
        res.sendFile(__dirname + "/public/" + "dashboard.html");
      }
      else{
        res.send("<h1>please signup first or Password was wrong</h1>");
      }
    })
  })
  // app.get('/search', function (req, res) {  
  //   const searchTerm = req.query.input;
  //   const limit = 1;
  //   const apiUrl = `https://itunes.apple.com/search?term=${searchTerm}&entity=musicTrack&limit=${limit}`;
    
  //   fetch(apiUrl)
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data.results[0]['artistName']);
  //         console.log(data.results[0]['trackName']);
  //         console.log(data.results[0]['releaseDate']);

  //       })
      
  // })
app.listen(3000, function () {  
console.log('Example app listening on port 3000!')  
})