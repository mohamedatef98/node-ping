var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')


app.get('/', function (req, res) {
    var file = fs.readFileSync(path.join(__dirname, 'index.html'), 'UTF-8')
    res.status(200)
    res.setHeader('Content-Type', 'text/html')
    res.send(file)
    res.end()
})

app.listen(80, function() { console.log('Server is running') })
