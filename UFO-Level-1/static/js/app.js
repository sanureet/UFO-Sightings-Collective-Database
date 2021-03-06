// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO Data from data.js
console.log(tableData);

// Step 1: Loop Through `data` and console.log each UFO Report object
tableData.forEach(function(UFOReport) {
    console.log(UFOReport);
    // Step 2:  Use d3 to append one table row `tr` for each UFO Report object
    // Don't worry about adding cells or text yet, just try appending the `tr` elements.
    var row = tbody.append("tr");
    // Step 3:  Use `Object.entries` to console.log each UFO Report value
    Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
    // Step 4: Use d3 to append 1 cell per UFO report value (date, city, state, country, shape, duration, comments)
    var cell = row.append("td");
    // Step 5: Use d3 to update each cell's text with
    // UFO report values (date, city, state, country, shape, duration, comments)
    cell.text(value);
    });
});

// ######################################################################

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);



    //   rebuild table using filter data

    tbody.html("");

    // Step 1: Loop Through `data` and console.log each UFO Report object
    filteredData.forEach(function(UFOReport) {
        console.log(UFOReport);
        // Step 2:  Use d3 to append one table row `tr` for each UFO Report object
        // Don't worry about adding cells or text yet, just try appending the `tr` elements.
        var row = tbody.append("tr");
        // Step 3:  Use `Object.entries` to console.log each UFO Report value
        Object.entries(UFOReport).forEach(function([key, value]) {
        console.log(key, value);
        // Step 4: Use d3 to append 1 cell per UFO report value (date, city, state, country, shape, duration, comments)
        var cell = row.append("td");
        // Step 5: Use d3 to update each cell's text with
        // UFO report values (date, city, state, country, shape, duration, comments)
        cell.text(value);
    });
});
  
};
