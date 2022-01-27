const parse=require('xml-parser');
const fs = require('fs');
var inspect = require('util').inspect;

var path='./xml/example.xml'
const parseXML=function(path){
    fs.access(path,(err)=>{
        if(err)
        {
            console.log('Path not found');
            return err;
        }
        else{
            fs.readFile(path,'utf-8',(err,data)=>{
                if(err)
                {
                    console.log('error');
                    return err;
                }
                const obj=parse(data);
                console.log(inspect(obj,{colors:true,depth:Infinity}));
            })
        }
    })
}

parseXML(path);
