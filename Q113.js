/*
Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital
 if it exists.

*/
// Create a Map to store countries and their capitals
var countryCapitalMap = new Map();
// Add countries and their capitals to the map
countryCapitalMap.set("USA", "Washington D.C.");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("Pakistan", "Islamabad");
// Example usage: Print out all countries and their capitals
countryCapitalMap.forEach(function (capital, country) {
    console.log("Capital of ".concat(country, ": ").concat(capital));
});
function logCanadaCapital(map) {
    if (map.has("Canada")) {
        var canadaCapital = map.get("Canada");
        if (canadaCapital) {
            console.log("The capital of Canada is ".concat(canadaCapital, "."));
        }
        else {
            console.log("Canada's capital is not available.");
        }
    }
    else {
        console.log("Canada is not present in the map.");
    }
}
// Example usage with the previously defined map
logCanadaCapital(countryCapitalMap);
