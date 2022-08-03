const EventEmmiter = require('events')

class Emmiter extends EventEmmiter{}

const myemmiter = new Emmiter()
myemmiter.on('event',()=> console.log('Event Fired'))

myemmiter.emit('Event')