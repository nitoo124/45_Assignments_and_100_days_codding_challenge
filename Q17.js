//Q:15
var guest = ['Noor', 'Naina', 'Naheed'];
var MSG = 'you are inivited to the dinner dear ';
var not_join_guest = 'Naina';
var new_guest = 'Natasha';
guest.splice(1, 1, new_guest);
console.log(guest);
/*for (let a = 0; a < guest.length; a++) {
     console.log (MSG + guest[a]);}*/
//q:16
console.log("Good newa! we found a bigger table ");
var beginning_guest = 'Rabeeka';
var middle_guest = 'Sanjay';
var end_guest = 'Areeba';
guest.unshift(beginning_guest);
guest.splice(2, 0, middle_guest);
guest.push(end_guest);
console.log(guest);
/*for (let b = 0; b < guest.length; b++) {
console.log(MSG + ' ' + guest[b]);
}*/
// Q: 17
console.log('Unfortunately I can invite only two peoples');
while (guest.length > 2) {
    var remove_guest = guest.pop();
    console.log("Sorry dear ".concat(remove_guest, " i can't invite you to dinner"));
}
guest.forEach(function (guest) {
    console.log("you are still invited dear ".concat(guest, " "));
});
guest.splice(0, 2);
console.log(guest);
