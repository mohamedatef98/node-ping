const { createServer } = require('http')

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'plain/text' })
    res.end('Hello world')
})

server.listen(3000)
