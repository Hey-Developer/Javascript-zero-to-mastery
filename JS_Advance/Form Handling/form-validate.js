// -- form validation through simple JS logics:
function validateForm() {
    var name = document.myForm1.userName.value;
    var password = document.myForm1.userPass.value;

    if (name == null || name == "") {
        alert("Please enter Name");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
}

/* 
$ Data Validation:
  Data validation is the process of ensuring that user input is clean, correct, and useful.
  Validation can be defined by many different methods, and deployed in many different ways.
  > Server side validation is performed by a web server, after input has been sent to the server.
  > Client side validation is performed by a web browser, before input is sent to a web server.

$ HTML Constraint Validation:
  HTML5 introduced a new HTML validation concept called constraint validation.
  HTML constraint validation is based on:
  # Constraint validation HTML Input Attributes:
    -- disabled	 Specifies that the input element should be disabled
    -- max	     Specifies the maximum value of an input element
    -- min	     Specifies the minimum value of an input element
    -- pattern	 Specifies the value pattern of an input element
    -- required	 Specifies that the input field requires an element
    -- type 	 Specifies the type of an input element

  # Constraint validation CSS Pseudo Selectors:
    -- :disabled	Selects input elements with the "disabled" attribute specified
    -- :invalid	    Selects input elements with invalid values
    -- :optional	Selects input elements with no "required" attribute specified
    -- :required	Selects input elements with the "required" attribute specified
    -- :valid	    Selects input elements with valid values  

  # Constraint validation DOM Properties and Methods:
    -- validity	            Contains boolean properties related to the validity of an input element.
    -- validationMessage	Contains the message a browser will display when the validity is false.
    -- willValidate	        Indicates if an input element will be validated.
    -- checkValidity()	    Returns true if an input element contains valid data.
    -- setCustomValidity()	Sets the validationMessage property of an input element.
*/