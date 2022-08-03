const EventEmmiter = require('events')
const uuid = require('uuid')
console.log(uuid.v4())

class Logger extends EventEmmiter{
    log(msg){
        this.emit('message',{id: uuid.v4(),msg})
    }
}

const Logger = require('./logger')
const logger = new Logger()
logger.on('message',(data)=>console.log('Called listener: ',data))
logger.log("Hello")