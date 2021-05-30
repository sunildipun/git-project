const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const mongoClient = require('mongodb').MongoClient;

// const application = require('./api/api.router');
const applicationRoutes =  require('./api/api.router');

const app  = express(); 
const PORT = 3000 || process.env.PORT;

const uri = 'mongodb+srv://sunil:sunil123@cluster0.ub6gu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const client = new mongoClient(uri);
// client.connect();

// client.connect((err, db) => {  
//   if (err) throw err;  
//   db.createCollection("user", function(err, res) {  
//   if (err) throw err;  
//   console.log("Collection User is created!");  
//   db.close();  
//   });  
// });  



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
app.use(cors());

// Database Name
const dbName = 'gitUserRepo';

//Fetch all user from github
async function getUser() {
  try {
    axios.get('https://api.github.com/users', {
      headers: {
      'Authorization': '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'
    }})
    .then(function (response) {
      // handle success
      // console.log('User',response.data);

      const db = client.db(dbName)
      db.createCollection('user', (err) => {
        if(err) throw err;
      });

      const user = db.collection('user');
      user.insertMany(response.data);
    })
    .catch(function (error) {
      // handle error
      throw(error);
  })
    
  } catch (error) {
    console.log(error);
  }
}

//Fetch all Public Repo from github
async function getRepo() {
  try {
    axios.get(' https://api.github.com/repositories', {
      headers: {
      'Authorization': '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'}
    })
    .then(function (response) {
      // handle success
      // console.log('Repo',response);
      const db = client.db(dbName)
      db.createCollection('repo', (err) => {
        if(err) throw err;
      });
      const repo = db.collection('repo');
      repo.insertMany(response.data);
    })
    .catch(function (error) {
      // handle error
      throw(error);
  })
    
  } catch (error) {
    console.log(error);
  }
}



// Static directory path
app.use(express.static(path.join(__dirname, '/ui/ui-for-git/dist/ui-for-git')));

app.use('/api/', applicationRoutes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/ui/ui-for-git/dist/ui-for-git/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`);
    // getUser();
    // getRepo();
});