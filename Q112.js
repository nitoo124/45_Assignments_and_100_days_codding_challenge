/*
Question 112: Create a Map that stores the names of countries as keys and their capitals as values.
 Add three countries to the Map.
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
