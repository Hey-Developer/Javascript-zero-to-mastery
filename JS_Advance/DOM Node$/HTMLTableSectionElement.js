/* 
The HTMLTableSectionElement interface provide special properties and methods for manipulating the layout and presentation of sections, that is header, footers and bodies, in an HTML Table.
Here U will target a particular section instead fo targeting the whole table.

# Properties-->
  > rows: 
    This returns a live html collection containing the rows of the section.
# Methods-->
  > insertRow()
  > deleteRow()
*/

var tableBody = document.getElementById("myTable").tBodies[0];

//-- Accessing rows.
var tableBodyRows = tableBody.rows;
console.log(tableBodyRows);
console.log(tableBodyRows[0]);

//-- insertRow()-->
var newRow = tableBody.insertRow(-1);
newRow.insertCell(0).innerText = "HII";
newRow.insertCell(1).innerText = "HII";
newRow.insertCell(2).innerText = "HII";

//-- deleteRow-->
tableBody.deleteRow(-1);