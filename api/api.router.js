const express = require("express");
const axios = require('axios');
const mongoClient = require('mongodb').MongoClient;


const applicationRoutes = express.Router();

/**
 * Fetching all user from git
 */

applicationRoutes.get('/user', (req, res) => {
    try {
        axios.get('https://api.github.com/users', {
            headers: {
            'Authorization': 'token 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'
          }})
          .then(function (response) {
            // handle success
            // console.log('User',response.data);
            res.status(200).send(response.data);
          })
          .catch(function (error) {
            // handle error
            // console.log('Err', error);
            res.status(400).send(error);
            return;
        })
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
});

/**
 * Fetching All public Repositories from git
 */

applicationRoutes.get('/repo', (req, res) => {
    try {
    axios.get(' https://api.github.com/repositories', {
    headers: {
      'Authorization': 'token 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'}
    })
    .then(function (response) {
        // console.log('User',response.data);
        res.status(200).send(response.data); 
    })
    .catch(function (error) {
      // handle error
      // throw(error);
      res.status(400).send(error);
      return;
  })
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
});

/**
 * Fetching Repositories List of Particular User from git
 */

applicationRoutes.get('/repo-list', (req, res) => {
  try {
    const username = req.query.username;

    axios.get(`https://api.github.com/users/${username}/repos`, {
    headers: {
      'Authorization': 'token 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'}
    })
    .then(function (response) {
        // console.log('Response',response.data);
        res.status(200).send(response.data); 
    })
    .catch(function (error) {
      // handle error
      res.status(400).send(error);
      return;
    })
    
  } catch (error) {
    res.status(400).send(error);
  }
});

/**
 * Fecthing specified User from DB , if not present from Git then inserting it to DB
 */

applicationRoutes.get('/specified-user', (req, res) => {
  try {
    const username = req.query.username;
    const uri = 'mongodb+srv://sunil:sunil123@cluster0.ub6gu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    console.log('Hello');
    // const client = new mongoClient();
    mongoClient.connect(uri, async (err, client) => {
      if(err) {
           console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
      }
      console.log('Connected...');
      const collection = client.db("gitUserRepo").collection("user");
      // perform actions on the collection object
      
      const result = await collection.findOne({login: username});
      console.log('mongo result',result);
      if(result) {
        res.status(200).send({message: 'From Data base', ...result})
      } else {
        const result = await getUserFromGit(username);
        await collection.insertOne(result);
        res.status(200).send({message: 'Got result from git', ...result});
      }
      
      client.close();
   });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

/**
 * 
 * @param username 
 * @returns data from github to add in db
 * 
 */

async function getUserFromGit(username) {
  return new Promise((resolve, reject) => {
    // const username = req.query.username;

    axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      'Authorization': 'token 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'}
    })
    .then(function (response) {
        resolve(response.data);
    })
    .catch(function (error) {
      // handle error
      reject(error)
    })
  })
}




module.exports = applicationRoutes;