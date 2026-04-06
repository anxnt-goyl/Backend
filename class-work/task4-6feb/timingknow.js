const crypto = require("crypto");
const BeforeExe = Date.now();
// crypto.pbkdf2Sync("passwordqwerty","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
for(let i=0;i<100;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",err=>{
if(err) console.log(err);
console.log(Date.now()-BeforeExe);
});}
