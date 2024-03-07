/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/


let guest : string[] =['Noor', 'Naina', 'Naheed'];
let MSG : string = 'you are inivited to the dinner Miss ';

for (let i = 0; i <= guest.length; i++) {
     console.log(MSG + guest[i]);
    
}

