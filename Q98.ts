/*
Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/

function day_unit_new_year() : void{

    const today : Date = new Date();

    const newyear : Date = new Date(today.getFullYear() + 1, 0, 1);

    const millisecondsPerDay : number = 1000 * 60 *60 * 24 ;
    

    const defference : number = newyear.getTime() - today.getTime();

    const days: number = Math.ceil(defference / millisecondsPerDay);

    console.log(`There are ${days} days left until New Year.`);


}
(day_unit_new_year());

