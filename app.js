const { createServer } = require('http')
const { exec } = require('child_process')

const restartThingsBoardCmd = 'sudo service thingsboard restart'
const getThingsBoardStatusCmd = 'sudo service thingsboard status'

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (req.url === '/') exec(getThingsBoardStatusCmd, (err, stdout, stderr) => {
        if (err) res.end(JSON.stringify({ err, stderr }))
        res.end(JSON.stringify({ stdout }))
    })

    else if (req.url === '/restart') exec(restartThingsBoardCmd, (err, stdout, stderr) => {
        if (err) res.end(JSON.stringify({ err, stderr }))
        res.end(JSON.stringify({ message: 'RESTARTED', stdout }))
    })
})

server.listen(3000)

console.log('Server is running')
