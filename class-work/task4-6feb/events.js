const events = require("events");
const EventEmitter = new events.EventEmitter();
function eh (){
    console.log("event occured");
};
EventEmitter.on("event occured",()=>{
    console.log("event done");
});
EventEmitter.emit("event occured");
