const fs=require('fs');
const async = require('async');
const request = require('request');

const urlArray=[
   `https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg`,
    `https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg`,
    `https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg`,
    `https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg`,
    `https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg`,
    `https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg`,
    `https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg`
    ]

let dir='./ImageDownload/folder0';
let noOfFolder=0;
let count=0;
if(!fs.existsSync(dir))
fs.mkdirSync(dir);

async function ImageDownload(){
    urlArray.forEach((element) => {
        if(count===5)
        {
            noOfFolder++;
            count=0;
            dir=`./ImageDownload/folder${noOfFolder}`;
            if(!fs.existsSync(dir))
            fs.mkdirSync(dir);
        }
        request(element).pipe(fs.createWriteStream(`${dir}/image${urlArray.indexOf(element)+1}.jpg`));
        count++;
    });
}   

ImageDownload();