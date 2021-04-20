
//dependencies

const express = require('express')

//config - express
const app = express()

// endpoint - posts

  app.get('/posts', (request, response) => {
    let posts = [
      {
        caption: 'Golden gate bridge',
        location: 'Los Angeles, United States',
      },

      {
        caption: 'London Eye',
        location: 'London, United Kingdom',
      },

    ]
    response.send(posts)


  })

// listen for changes

app.listen(3000)
