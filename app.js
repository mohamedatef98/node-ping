var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')

app.use(express.static('static'))

const port = process.env.PORT
if(!port) throw new Error('PORT env variable isn\'t set')

app.listen(port, function() { console.log('Server is running') })
