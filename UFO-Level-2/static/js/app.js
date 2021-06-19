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
// var form = d3.select("#form");

// Create event handlers 
button.on("click", function(){
// form.on("submit",runEnter);

    console.log('clearing table')
    tbody.html("");
    console.log('table cleared')
    
// Complete the event handler function for the form
// function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#input-text");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputElement);  
  console.log(inputValue);
  

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue ||
                                                    tableData.city === inputValue ||
                                                    tableData.state === inputValue ||
                                                    tableData.country === inputValue ||
                                                    tableData.shape === inputValue);


                                                    
  console.log(filteredData);




  //   rebuild table using filter data

        

    // Step 1: Loop Through `data` and console.log each UFO Report object
    filteredData.forEach(function(tableData) {
        console.log(tableData);
        // Step 2:  Use d3 to append one table row `tr` for each UFO Report object
        // Don't worry about adding cells or text yet, just try appending the `tr` elements.
        var row = tbody.append("tr");
        // Step 3:  Use `Object.entries` to console.log each UFO Report value
        Object.entries(tableData).forEach(function([key, value]) {
        console.log(key, value);
        // Step 4: Use d3 to append 1 cell per UFO report value (date, city, state, country, shape, duration, comments)
            var cell = row.append("td");
        // Step 5: Use d3 to update each cell's text with
        // UFO report values (date, city, state, country, shape, duration, comments)
            cell.text(value);
        });
    });

});


// select dropdown for city, state,country, and shape

// var cityDropdown = d3.select("city");
// var stateDropdown = d3.select("state");
// var countryDropdown = d3.select("country");
// var shapeDropdown = d3.select("shape");

// // assign buttons for city, state,country, and shape

// var citybutton = d3.select(".btn-city");


