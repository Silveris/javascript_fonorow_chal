// from data.js
var tableData = data;

let button = d3.select('.btn');
let filterBy = d3.select('.form-control');

// let dateId = d3.select('#date-head');
// let cityId = d3.select('# city-head');
// let stateId = d3.select('# state-head');
// let countryId = d3.select('#country-head');
// let shapeId = d3.select('# shape-head');
// let durationId = d3.select('# duration-head');
// let commentsId = d3.select('# comments-head');
let tbody = d3.select("tbody");

button.on('click', function() {
    let form = filterBy;
    let filterValue = form.property('value');
    console.log(filterValue)

    let dataFiltered = data.filter(data => data.datetime === filterValue);

    console.log(dataFiltered);

    tbody.html('')

    dataFiltered.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});
