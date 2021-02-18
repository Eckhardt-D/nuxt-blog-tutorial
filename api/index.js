const express = require('express')
const app = express()

app.use(express.json())
app.use(express.text())

app.get('/posts', (_, res) => {
  return res.json([{ id: 1, title: 'We are making a blog.', body: '<h1>It\'s quite easy.</h1><br><p>Discover your inner blogger.</p>' }, { id: 2, title: 'Nuxt.js is pretty awesome.', body: '<h1>It\'s the best actually.</h1><br><p>Eat. Sleep. Code. Repeat.</p>' }])
})

module.exports = app