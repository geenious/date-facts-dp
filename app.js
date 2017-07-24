// Required modules
const moment = require('moment');
const chalk = require('chalk');
// Line 1
let today = `It is ${chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}`;
console.log(today);
// Line 2
let day = `It is the ${chalk.magenta(moment().format("DDDo"))} day of the year.`;
console.log(day);
// Line 3
let todayBegin = moment([2017, 6, 24]);
let seconds = `It is ${chalk.cyanBright(moment().diff(todayBegin, "seconds"))} seconds into the day.`;
console.log(seconds);
// Line 4
let isDaylightSavings = '';
if (moment().isDST() === true) {
  console.log(`It ${chalk.green("is")} during Daylight Savings Time`);
}
// Line 5
let isALeapYear = '';
if (moment().isLeapYear() === false) {
  console.log(`It ${chalk.red("is not")} a leap year`);
}
