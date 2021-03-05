let path = require('path');
let fs = require('fs');
let request = require('request');

let dataPath = path.join(__dirname, '../data.json'); 
console.log(dataPath);

// request('https://reddit.com/r/popular.json', (err, res, body) => {
//     if(err) console.log(err);
    
// JSON.parse(body).data.children.forEach(item => {
//     fs.appendFileSync(dataPath,item.data.title + '\n');
// });

// // fs.writeFile(dataPath, res.body, err => {
// //     if(err) console.log(err);

// });

let chirper = [
    {
      name: "Ash_GotEM", chirp: "Pik_achoo I choose YOUR MOM" },
  
    { name: "Misty_eyes", chirps: "How dare you Ash_GotEM! You know about his mom!" },
  
    { name: "Broagunk", chirps: "Oh, that's right! She ran away with the circus.." },
  
    { name: "Pik_achoo", chirps: "PIKA! Pikaaaah." },
  
    { name: "Serennekin", chirps: "Ta-da! I told you this would happen!" }
  ];

  fs.writeFile("chirper.json", JSON.stringify(chirper), (err) => {if (err) return console.log(err)} )




