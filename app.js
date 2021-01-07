var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')

const staticDir = path.join(__dirname, 'static')

app.get('/', function (req, res) {
    var file = fs.readFileSync(
        path.join(staticDir, 'index.html'), 
        'UTF-8'
    )
    res.status(200)
    res.setHeader('Content-Type', 'text/html')
    res.send(file)
    res.end()
})

app.listen(80, function() { console.log('Server is running') })
