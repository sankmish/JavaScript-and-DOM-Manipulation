// from data.js
var tableData = data;

var tbody = d3.select("#tableBody");
tableData.forEach((pointer) => {
var row = tbody.append("tr");
  Object.entries(pointer).forEach(([key,value]) => {
    var col = row.append("td");
    col.text(value);
  })
});

d3.select("#filter-btn").on("click", filterTable);

function filterTable() {
  d3.event.preventDefault();
  var dateInput = d3.select("#datetime").property("value");
  var filteredData = tableData.filter(pointer => pointer.datetime === dateInput);
  document.getElementById("tableBody").innerHTML = "";
  filteredData.forEach((dateInput) => {
    var row = tbody.append("tr");
    Object.entries(dateInput).forEach(([key,value]) => {
      var col = row.append("td");
      col.text(value);
        })
    })
};
