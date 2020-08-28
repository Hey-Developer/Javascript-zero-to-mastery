/* 
$ HTML Table Element-->
  HtmlTableElement interface provides special properties and for manipulating the layout and presentation of tables in an HTML document.
  
  #Properties-->
   > caption-
     This property represents the table caption. If no caption element is associated with the table,  it can be null.
   > tHead-
     This property represents the table's <thead> element. Its value can be null if there is no such element.
   > tFoot-
     This property represents the table's <tfoot> element. Its value can be null if there is no such element.
   > rows-
     This property rows returns a live HTMLCollection of all the rows in the table, including the rows contained within any <thead>,<tfoot> and <tbody> elements.
     Although the property itself is read-only, the returned object is live and allows the modification of its content.
   > tBodies-
     This read only property returns a live HTMLCollection of the table bodies. Although the property is read only, the returned object is live and allows the modification of its content.

   #Methods-->
   > createCaption()
     This Method returns the caption for the table. 
     If no caption element exists on the table,This method created it, then returns it.

   > deleteCaption()
     This method removes the caption element from the table. if there is no caption element, this method will do nothing.

   > createTHead()
     This method returns the <thead> element section association with the table of type HTMLTableSectionElement.
     If there is no <thead> it will create a empty a <thead>.

   > deleteTHead()
     This removes a <thead> element from the table.

   > createTFoot()
     This method returns the <tfoot> element associated with the table of type HTMLTableSectionElement,
     If there is no <tfoot> element it will create a empty <tfoot> element

   > deleteTFoot()
     This method removes a <tfoot> element from the table.

   > insertRow()
     This method insert a new row into the table and returns the a reference to the new row.
     ~ Syntax: HTMLTableElement.insertRow(index=-1)
       index is the row index of the new row.
       Row is assigned a reference to the new row. 
       A reference to HTMLTableRowElement. 
       If index is -1 or equal to the number of rows, the row is append as the last row.
       If index is greater than the number of rows, an IndexSizeError exception will result.
       If index is omitted it defaults to -1.
       If There is multiple <tbody> row will inserted in the last <tbody>

   > deleteRow()
     This removes a row from the table.
     If the number of rows to delete,Specified by the parameter, is greater or equal to the number of available rows, or if it is negative and  not equal to the special index -1,
     representing the last row of the table, the exception INDEX_SIZE_ERR is thrown
*/

//# Getting our HTML Table element as DOM Object.
var table = document.getElementById("myTable");

// -- caption
var tableCaption = table.caption; // return [object HTMLTableCaptionElement]
console.log(`Caption of table:`);
console.log(tableCaption.innerHTML);
console.log(tableCaption.innerText);

// Manipulating Table Caption
tableCaption.innerText = "Students marks info-->";

// -- thead-->
var tableHead = table.tHead;
console.log(tableHead);
console.log(tableHead.innerHTML);
console.log(tableHead.innerText);

// Manipulating tableHead
tableHead.innerHTML =
    "<tr><th>Student_NAme</th><th>Subject_NAme</th><th>Student_MArks</th></tr>";

// -- tFoot-->
var tableFoot = table.tFoot;
console.log(tableFoot);
console.log(tableFoot.innerHTML);
console.log(tableFoot.innerText);

// Manipulating tableHead
tableFoot.innerHTML =
    "<tr><th colspan='2'>Highest MArks</th><th>Shivani(100)</th></tr>";

// -- tBodies -->
var tableBody = table.tBodies;
console.log(tableBody); // collection of tBody element in your table. here 2.
console.log(tableBody[0].innerHTML);
console.log(tableBody[0].innerText);
console.log(tableBody[1].innerHTML);
console.log(tableBody[1].innerText);

// Here u can also manipulate it:
tableBody[1].innerHTML = "<tr><td>Hii</td><td>Hii</td><td>Hii</td></tr>";

// -- createCaption()
var tCap = table.createCaption();
console.log(tCap);
console.log(tCap.innerHTML);
console.log(tCap.innerText);

// -- deleteCaption();
table.deleteCaption();

//? Now as there is no caption in the table Element: And here when we use createElement() method it will create new caption and return it.
var newTCap = table.createCaption();
// > creates empty caption element.
newTCap.innerHTML = "Student-MARKS-Table";

// -- createTHead()
var tHead = table.createTHead();
// In our table thead already exists hence it will return the existing thead.
console.log(tHead);
console.log(tHead.innerHTML);

// -- deleteTHead()
table.deleteTHead();

// ? create a new Table Head:
var newTHead = table.createTHead();
newTHead.innerHTML = "<tr><th>Name</th><th>COURSE</th><th>Marks</th></tr>";

// -- createTFoot() --
var tFoot = table.createTFoot();
console.log(tFoot);
console.log(tFoot.innerHTML);

// -- deleteTFoot() --
table.deleteTFoot();

// ? Create a new <tfoot>
var newTFoot = table.createTFoot();
newTFoot.innerHTML = "<tr><th>Name</th><th>COURSE</th><th>Marks</th></tr>";

// -- insertRow()
var newRow = table.insertRow(-1); // append a empty row in the last.
console.log(newRow);
// To insert cell in this row we use insertCell() methods.
newRow.insertCell(0).innerText = "New Data";
newRow.insertCell(1).innerText = "New Data 2";
newRow.insertCell(2).innerText = "New Data 3";

// If u don't want to append the new row in the last then specify the index: for ex if u want ur row @ first then [0] for @ second then [1].
var newRow1 = table.insertRow(2);
newRow1.insertCell(0).innerText = "New Data";
newRow1.insertCell(1).innerText = "New Data 2";
newRow1.insertCell(2).innerText = "New Data 3";

// -- deleteRow()
table.deleteRow(-1);
table.deleteRow(2);