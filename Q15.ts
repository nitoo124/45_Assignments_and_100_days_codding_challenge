/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating 

the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with 
the name of the new person you are inviting.*/


let guest : string[] =['Noor', 'Naina', 'Naheed'];
let MSG : string = 'you are inivited to the dinner Miss ';

for (let i = 0; i <= guest.length; i++) {
     console.log(MSG + guest[i]);
}

let not_join_guest : string = 'Naina';

console.log(`${not_join_guest} can't join for dinner unfortunately`);


let new_guest : string = 'Natasha';
guest.splice(1,1,new_guest);
console.log(guest);

for (let a = 0; a < guest.length; a++) {
     console.log (MSG + guest[a]);
     
}


