// $ createElement(element_name) method is used to create the html element with specified tag Name.
// or an an HTML UnknownElement if tag name is not recognized.
// It returns new element.
var newH2 = document.createElement("h2");
console.log(newH2);

// $ createTextNode("content") method is used to create a text node with the specified text("content")
var newTxt = document.createTextNode("Shraddha is my life.");
console.log(newTxt);

// $ createComment("content") method is used to create a comment node with the specified text("content") and returns it.

var newComment = document.createComment("This is my comment by JS");
console.log(newComment);

// * Document Fragment > interface represents a minimal document object that has no parent.
// A common use for Document Fragment is-->
// > Is to create one,
// > assemble a DOM subtree within it,
// > Then append  or insert hte fragment into the DOM using node interface methods such as appendChild or insertBefore().
// > Document Fragment is not a part of active document tree structure, changes made to the fragment dod]n't affect the document.
// ~ In my words: document fragments is separately created fragment or a part in which we create a template to access 1 or more elements from the document tree. and then append this template to ac tree.
//   IN this way we don't need to do changes in our active tree one by one on every element.
//  When we append a document fragment(template is move to active tree not copy.) to active tree then  the document fragment which we created will become empty or we can say destroyed.

// $ createDocumentFragment method creates a imaginary Node Object, with all the properties and methods of the Node Object.

var df = document.createDocumentFragment();
console.log(df);