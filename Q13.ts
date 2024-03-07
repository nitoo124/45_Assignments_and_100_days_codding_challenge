/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
 make a list that stores several examples.
  Use your list to print a series of statements about these items, 
such as  would like to own a Honda motorcycle.”*/

let transportation : string[]=['Car', 'Bus', 'Bike', 'Motor cycle', 'Civic'];

transportation.map((elements)=> console.log(`would like to own a ${elements}`));