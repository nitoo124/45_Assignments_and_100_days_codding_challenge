/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 make a list that stores several examples.
  Use your list to print a series of statements about these items,
such as  would like to own a Honda motorcycle.”*/
var transportation = ['Car', 'Bus', 'Bike', 'Motor cycle', 'Civic'];
transportation.map(function (elements) { return console.log("would like to own a ".concat(elements)); });
