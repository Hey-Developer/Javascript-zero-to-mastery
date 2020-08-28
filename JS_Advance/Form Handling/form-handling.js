/* 
$ FORM-HANDLING:
  JS provides access to the forms within an HTML document through the form object known as HTMLFormElement in the DOM.
  Which is child of the document object.
  So in my words--> <form> tag in html doc. is represented as HTMLFormElement in DOM:

  # Properties of this HTMLFormElement:
    -- accept-charset: value(UTF-8), specifies the charset used in the submitted form (default: the page charset).
    -- action: value(URL), contains a URL that defines where to send the data after submitting the form.
    -- autocomplete: value(on/off), determines that the browser retains the history of previous values.
    -- enctype: specifies how the browser encodes the data before it send to the server,(defaultLis url-encoded)
    -- encoding: Holds the value of the enctype attribute, which usually contains either application/x-www-form-urlencoded value or the multipart/form-data value(in this case of file upload.)
    -- elements[]: An array of DOM elements that correspond to the interactive form fields within the <form>.
 
  # Methods of the HTMLFormElement:
    -- checkValidity(): returns a true or false value indicating whether or not all the fields in the form are in a valid state.
    -- reset(): Returns all the form fields to their initial state.
    -- submit(): Submits the form to the URL specified in the form's action attribute.

  # Events of the HTMLFormElement:
    -- onsubmit
    -- onreset

*/

/* 
$ Accessing Forms:
  JS provides various ways of accessing form:-
  -- document.forms[index-number]: it returns collection of form in the documents(because in one document there may be more than one <form>).
  -- document.forms["name_attribute_value"]: we can use name attribute of the form.
  -- document.name_attribute_value: we can use name attribute of the form with dot as well.
  -- document.getElementById("Form_ID"): if form has an unique id we can use it.
*/

// With IndexNumber:
var form1 = document.forms[0];
console.log(form1);

var form2 = document.forms[1];
console.log(form2);

// With name-attribute:
var mForm1 = document.forms["myForm1"];
console.log(mForm1);
var mForm2 = document.forms["myForm2"];
console.log(mForm2);

// With name_attribute directly:
console.log(document.myForm1);
console.log(document.myForm2);

// Accessing with id:
console.log(document.getElementById("myForm1"));
console.log(document.getElementById("myForm2"));

/* 
$ Accessing Forms Fields/Elements:
  -- elements[]: it contains collection of form fields and u can access each by index_number.
  > Syntax: 
    ~ document.form_name.elements[index_number];
    ~ document.form_name.elements["Name_attribute_value"];
    ~ document.form_name.Name_attribute_value;
    ~ document.form_name.ID_attribute_value;

  -- getElementByName("Field_name"): this method is also used to access form fields.
*/

// Accessing by  ID:
console.log(document.getElementById("un"));

// Accessing by IndexNumber:
var firstElement = document.myForm1.elements[0]; // fieldset
var secondElement = document.myForm1.elements[1]; // input:text
console.log(firstElement);
console.log(secondElement);

// Accessing by Name_attribute_value:
var unField = document.myForm1.elements["userName"];
console.log(unField);
console.log(unField.id);
console.log(unField.type);
console.log(unField.value);

// Accessing by Name_attribute_value directly:
var upField = document.myForm1.userPass;
console.log(upField);
console.log(upField.id);
console.log(upField.type);
console.log(upField.value);

// Accessing directly by ID_attribute_value:
var userP = document.myForm1.up;
console.log(userP);
console.log(userP.innerText);

// ~ All these properties(id,type,value) are DOM properties originated from HTML attributes: