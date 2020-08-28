/* 
~ The HTMLTableRowElement interface provides special properties and methods or manipulating the layout and presentation of rows in th HTML table.

# properties-->
  > cells:
    It returns a live HTML collection containing  the cells in the row.
    The HTML Collection is live and is automatically updated when cells are added or removed.

  > rowIndex:
    It returns a long value which gives the logical position of the row within the entire table.
    If the ros is not a part of table, returns -1.

  > sectionRowIndex:
    It returns a long value which gives the logical position of the row within the table section it belongs to.
    If the row is not part of a section, returns -1.
    
# Methods
  > insertCell()
    This methods inserts a new cell into a table row and returns a reference to cell.
    ~ HTMLTableRowElement.insertRows(index)
      If index is -1 or equal to the number of cells ,the cell is appended as the last cell in the row.
      if index is greater than the number of cells, an indexSizeError exception will result.
      If index is omitted it defaults to -1.

  > deleteCell()
    It removes the cell from the html table row from the specified index:
*/

// -- cells
// ! NOTE: before accessing the cell u must reach the row element first:
var tableRows = document.getElementById("myTable").rows;
console.log(`No of rows in the table: ${tableRows.length}`);

// Cells in each row:
var rowCells = tableRows[1].cells;
console.log(rowCells);
console.log(`No of cells in the rows ${rowCells.length}`);

// Access cell by index:
console.log(rowCells[0]);
console.log(rowCells[1]);
console.log(rowCells[2]);

// If u want to access particular cell by its id then: in a particular row.
console.log(rowCells.namedItem("myRow"));

// for accessing content inside the cells:
console.log(rowCells[0].innerHTML);

// YOU can also manipulate it:
rowCells[0].innerHTML = "CLOVES";

// > I want the index of my row:
console.log(tableRows[0].rowIndex);

// > i want the index of my row

// -- insertCell();
var newCell = tableRows[1].insertCell(-1);
newCell.innerHTML = "CLOVES";

// -- deleteCell();
tableRows[1].deleteCell(-1);