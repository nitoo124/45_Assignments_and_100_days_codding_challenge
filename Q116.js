/*
Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
*/
function getSeason(month) {
    var season;
    switch (month) {
        // Winter: December (12), January (1), February (2)
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        // Spring: March (3), April (4), May (5)
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        // Summer: June (6), July (7), August (8)
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        // Autumn/Fall: September (9), October (10), November (11)
        case 9:
        case 10:
        case 11:
            season = "Autumn/Fall";
            break;
        default:
            season = "Invalid month. Please enter a number between 1 and 12.";
    }
    return season;
}
// Example usage:
console.log(getSeason(3)); // Output: Spring
console.log(getSeason(7)); // Output: Summer
console.log(getSeason(10)); // Output: Autumn/Fall
