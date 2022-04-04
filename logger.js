// console.log(__filename);
// console.log(__dirname);
var url = 'http://mylogger.io/log';
const EventEmitter = require('events');

class Logger extends EventEmitter {
     log(message) {
        // Send an HTTP request
        console.log(message);
    
        //Raise an event 
    this.emit('messageLogged', { id: 1, url: 'http://' });
    
    
    }
}







//makes public
module.exports = Logger;

