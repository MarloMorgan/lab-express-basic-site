const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('This is my homepage'))
app.get('/about', (req, res) => res.sendfile (__dirname + '/views/about.html'));
app.get('/gallery', (req, res) => res.sendfile (__dirname + '/views/gallery.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))