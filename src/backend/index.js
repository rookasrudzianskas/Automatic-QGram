
//dependencies

const express = require('express')
const admin = require('firebase-admin');



//config - express
const app = express()

// config firebase section

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


// endpoint - posts

  app.get('/posts', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let posts = []

    db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
      snapshot.forEach((doc) => {
        posts.push(doc.data())
      });
      response.send(posts)
    })

  })


// endpoint - Create Posts

app.post('/createPost', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  response.send(request.headers)
})


// listen for changes

app.listen(process.env.PORT || 3000)
