// require express package
const express = require('express')

//starting express app
const app = express()
const port = 3000

// middleware
app.use(express.static('public'));

// routes
app.get('/', (req, res) => res.send('This is my homepage'))
app.get('/about', (req, res) => res.sendfile (__dirname + '/views/about.html'));
app.get('/gallery', (req, res) => res.sendfile (__dirname + '/views/gallery.html'));
app.get('*', (req, res) => res.send ('404 - not found'));

// listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))