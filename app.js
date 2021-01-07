var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')

app.use(express.static('static'))

app.listen(80, function() { console.log('Server is running') })
