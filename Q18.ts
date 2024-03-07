//Q:18
let visit_places : string[] = ['Karach', 'Lahor', 'Islambad', 'Delhi', 'London'];

//• Print your array in its original order.
console.log(`Original order: ${visit_places}`);  

//• Print your array in alphabetical order without modifying the actual list
console.log(`Àlphabetical order : ${[...visit_places].sort()}` );

//• Show that your array is still in its original order by printing it.
console.log(`Original order : ${visit_places}`);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`reverse alphabetical order : ${[...visit_places].sort().reverse()}`);

// Show that your array is still in its original order by printing it again.
console.log(`original order : ${visit_places}`);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Reverse order : ${visit_places.reverse()}` );

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Reverse order : ${visit_places.reverse()}` );

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`Àlphabetical order : ${visit_places.sort()}` );

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`Àlphabetical order : ${visit_places.reverse()}` );






