const fs = require("fs");
const fh = fs.openSync("secfb","w+");
// console.log(fh);
// fs.writeFileSync(fh,"we are here to study \n");
// fs.closeSync(fh);
// console.log(fs.readFileSync("secfb.txt","utf8"));
// fs.renameSync("secFB.txt","secfb.txt");
// fs.appendFileSync("secFB.txt","lalallalalallll allalllalalalalall");
// console.log(fs.readFileSync("secFB.txt","utf8"));
// fs.cpSync("secfb.txt","texttt.txt");
// fs.writeFileSync("secFb.txt","scvhy shubuybs hbu qbuqwerty");
// fs.unlinkSync("texttt.txt");
fs.writeSync(fh,"hello");
const reset = Buffer.alloc(50);
fs.readSync(fh , reset,0,reset.length,0);
console.log(reset.toString);
// fs.writeFile("secfb","hello",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created");
//     }
// })