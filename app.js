

// const log = require('./logger')

// log('james meegan was here')

// const path = require('path')

// var pathObj = path.parse(__filename);

// console.log(pathObj)

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// // Template string
// // ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory:  ${freeMemory}`)

// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('$', function(err, files) {
//     if (err) console.log('Error', err)
//     else console.log('Result', files)
// })

// const EventEmitter = require('events');



// const Logger = require('./logger');
// const logger = new Logger()

// // Register a listener
// logger.on('messageLogged', (arg) => {  //e, eventArg
//     console.log('Listener called', arg)
// })

// logger.log('message');
// // Making a noise or produce something - signaling that an event has happened EMIT

// // Raise: logging (data: message)

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end
    }
});



server.listen(3000);

console.log('Listening on port 3000...')