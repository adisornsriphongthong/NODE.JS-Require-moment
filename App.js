const moment = require('moment');

let currentMoment = moment(); // Initialize with the current time

setInterval(myFunctionTime, 1000);

function myFunctionTime() {
    currentMoment = moment(); // Update with the current time
    console.log(currentMoment.format('YYYY-MM-DD HH:mm:ss'));
}
