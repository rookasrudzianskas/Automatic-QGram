
//dependencies

const express = require('express')
const admin = require('firebase-admin');
let inspect = require('util').inspect;
let Busboy = require('busboy');


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


  var busboy = new Busboy({ headers: request.headers });

  let fields = {}


  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    file.on('data', function(data) {
      console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
    });
    file.on('end', function() {
      console.log('File [' + fieldname + '] Finished');
    });
  });

  busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
    fields[fieldname] = val

  });

  busboy.on('finish', function() {
    db.collection('posts').doc(fields.id).set({
      id: fields.id,
      caption: fields.caption,
      location: fields.location,
      date: fields.date,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/qgram-2b8fd.appspot.com/o/F4ckE18.jpeg?alt=media&token=5c3d3a08-5dbd-4b48-b0f4-a3090e2e393d'
    });
    response.send("Done parcing form!")
  });
  request.pipe(busboy);
})


// listen for changes

app.listen(process.env.PORT || 3000)
