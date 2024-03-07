var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q:18
var visit_places = ['Karach', 'Lahor', 'Islambad', 'Delhi', 'London'];
//• Print your array in its original order.
console.log("Original order: ".concat(visit_places));
//• Print your array in alphabetical order without modifying the actual list
console.log("\u00C0lphabetical order : ".concat(__spreadArray([], visit_places, true).sort()));
//• Show that your array is still in its original order by printing it.
console.log("Original order : ".concat(visit_places));
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order : ".concat(__spreadArray([], visit_places, true).sort().reverse()));
// Show that your array is still in its original order by printing it again.
console.log("original order : ".concat(visit_places));
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order : ".concat(visit_places.reverse()));
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse order : ".concat(visit_places.reverse()));
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\u00C0lphabetical order : ".concat(visit_places.sort()));
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\u00C0lphabetical order : ".concat(visit_places.reverse()));
