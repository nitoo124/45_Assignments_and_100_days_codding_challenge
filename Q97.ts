/*
Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
*/

function get_current_date() : string {

        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const year = now.getFullYear();
        return `${day}-${month}-${year}`;    
    
}

console.log(get_current_date());
