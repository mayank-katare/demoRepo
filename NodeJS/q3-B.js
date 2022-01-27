const request = require('request');
const fs = require('fs');
const events = require('events');


const event=new events.EventEmitter();

event.on('data_dwnload',(data,err)=>{
    if(err)
    {
        return err;
    }
    request('https://www.google.com').pipe(fs.createWriteStream('./html/google.html'));
    console.log('Data downloaded');
})

event.emit('data_dwnload');
