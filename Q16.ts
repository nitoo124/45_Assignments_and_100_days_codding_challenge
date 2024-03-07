//Q:15


let guest : string[] =['Noor', 'Naina', 'Naheed'];
let MSG : string = 'you are inivited to the dinner dear ';


let not_join_guest : string = 'Naina';



let new_guest : string = 'Natasha';
guest.splice(1,1,new_guest);
console.log(guest);

for (let a = 0; a < guest.length; a++) {
     console.log (MSG + guest[a]);}
     



//q:16
console.log("Good newa! we found a bigger table ");
let beginning_guest : string = 'Rabeeka';
let middle_guest : string = 'Sanjay';
let end_guest : string = 'Areeba';
guest.unshift(beginning_guest);
guest.splice(2,0,middle_guest);
guest.push(end_guest);
console.log(guest);

for (let b = 0; b < guest.length; b++) {
console.log(MSG + ' ' + guest[b]);     
}



     
 



