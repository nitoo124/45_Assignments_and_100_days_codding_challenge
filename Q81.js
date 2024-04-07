/*
Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument
and logs all of its properties and values.
*/
function log_object_property(obj) {
    for (var key in obj) {
        console.log("".concat(key, " : ").concat(obj[key]));
    }
}
log_object_property({ make: 'Toyota', model: "camery", year: 2021, color: "black" });
