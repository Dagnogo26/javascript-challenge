// Level I

// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

//Loop Through `data` and console.log each weather report object
data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
  });


// Select the button
var button = d3.select("#filter-btn");



// Create event handlers 
button.on("click", function(){
     // clears the data of the current table        
    tbody.html("");
      
     // Prevent the page from refreshing
    d3.event.preventDefault();
     
     // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
   
     // Get the value property of the input element
    var inputValue = inputElement.property("value");
   
    console.log(inputValue);
     
   
    var filteredData = tableData.filter(info=> info.datetime === inputValue);
   
    console.log(filteredData);
     // display in the html file 
    filteredData.forEach((tableData) => {
       // for each "element" create a row
       var row = tbody.append("tr");
       //below "object" becomes the targetet array (element)
       Object.entries(tableData).forEach(([key,value]) => {
           var cell = row.append("td");
           // adds the "value" to each row in the table
           cell.text(value);
       });
   }); 
});     
    
// Level II

// Select the multiple buttons

var city_btn=  d3.select("#filter-btn-city");
var state_btn=  d3.select("#filter-btn-state");
var country_btn=  d3.select("#filter-btn-country");
var shape_btn=  d3.select("#filter-btn-shape");

  
// Create city event handler

city_btn.on("click", function(){
    // clears the data of the current table        
   tbody.html("");
     
    // Prevent the page from refreshing
   d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
   var inputcity = d3.select("#city");
  
    // Get the value property of the input element
   var inputcityValue = inputcity.property("value");
  
   console.log(inputcityValue);
    
  
   var city_filter = tableData.filter(info=> info.city === inputcityValue);
  
   console.log(city_filter);
    // display in the html file 
    city_filter.forEach((tableData) => {
      // for each "element" create a row
      var cityrow = tbody.append("tr");
      //below "object" becomes the targetet array (element)
      Object.entries(tableData).forEach(([key,value]) => {
          var citycell = cityrow.append("td");
          // adds the "value" to each row in the table
          citycell.text(value);
      });
  }); 
});     

// Create state event handler

state_btn.on("click", function(){
    // clears the data of the current table        
   tbody.html("");
     
    // Prevent the page from refreshing
   d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
   var inputestate= d3.select("#state");
  
    // Get the value property of the input element
   var inputstateValue = inputestate.property("value");
  
   console.log(inputstateValue);
    
  
   var state_filter = tableData.filter(info=> info.state === inputstateValue);
  
   console.log(state_filter);
    // display in the html file 
    state_filter.forEach((tableData) => {
      // for each "element" create a row
      var row = tbody.append("tr");
      //below "object" becomes the targetet array (element)
      Object.entries(tableData).forEach(([key,value]) => {
          var cell = row.append("td");
          // adds the "value" to each row in the table
          cell.text(value);
      });
  }); 
});     

// Create country event handler

country_btn.on("click", function(){
    // clears the data of the current table        
   tbody.html("");
     
    // Prevent the page from refreshing
   d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
   var inputecountry= d3.select("#country");
  
    // Get the value property of the input element
   var inputcountryValue = inputecountry.property("value");
  
   console.log(inputcountryValue);
    
  
   var country_filter = tableData.filter(info=> info.country === inputcountryValue);
  
   console.log(country_filter);
    // display in the html file 
    country_filter.forEach((tableData) => {
      // for each "element" create a row
      var row = tbody.append("tr");
      //below "object" becomes the targetet array (element)
      Object.entries(tableData).forEach(([key,value]) => {
          var cell = row.append("td");
          // adds the "value" to each row in the table
          cell.text(value);
      });
  }); 
});     

// Create shape event handler

shape_btn.on("click", function(){
    // clears the data of the current table        
   tbody.html("");
     
    // Prevent the page from refreshing
   d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
   var inputeshape= d3.select("#shape");
  
    // Get the value property of the input element
   var inputshapeValue = inputeshape.property("value");
  
   console.log(inputshapeValue);
    
  
   var shape_filter = tableData.filter(info=> info.shape === inputshapeValue);
  
   console.log(shape_filter);
    // display in the html file 
    shape_filter.forEach((tableData) => {
      // for each "element" create a row
      var row = tbody.append("tr");
      //below "object" becomes the targetet array (element)
      Object.entries(tableData).forEach(([key,value]) => {
          var cell = row.append("td");
          // adds the "value" to each row in the table
          cell.text(value);
      });
  }); 
});     

// Complete the event handler function for the form

