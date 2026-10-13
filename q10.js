let totalSeconds = 198765;

let days = Math.floor(totalSeconds / (24 * 3600));
let remainingAfterDays = totalSeconds % (24 * 3600);
let hours = Math.floor(remainingAfterDays / 3600);
let remainingAfterHours = remainingAfterDays % 3600;

let minutes = Math.floor(remainingAfterHours / 60);
let seconds = remainingAfterHours % 60;

console.log( `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds `);

