/*
Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital
 if it exists.

*/

// Create a Map to store countries and their capitals
let countryCapitalMap: Map<string, string> = new Map();

// Add countries and their capitals to the map
countryCapitalMap.set("USA", "Washington D.C.");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("Pakistan", "Islamabad");

// Example usage: Print out all countries and their capitals
countryCapitalMap.forEach((capital, country) => {
    console.log(`Capital of ${country}: ${capital}`);
});


function logCanadaCapital(map: Map<string, string>): void {
    if (map.has("Canada")) {
        const canadaCapital: string | undefined = map.get("Canada");
        if (canadaCapital) {
            console.log(`The capital of Canada is ${canadaCapital}.`);
        } else {
            console.log("Canada's capital is not available.");
        }
    } else {
        console.log("Canada is not present in the map.");
    }
}

// Example usage with the previously defined map
logCanadaCapital(countryCapitalMap);
