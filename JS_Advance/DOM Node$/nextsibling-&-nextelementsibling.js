// $ nextSibling: returns the node immediately following the specified one in its parent's childNodes list or
// Null if the specified node is the last node in that list.
// it includes text nodes and comments nodes and any whitespace.

var h2 = document.getElementById("myH2");
document.write(
    `Next Sibling of first child of h2 element: ${h2.firstChild.nextSibling} <br>`
);
console.log(h2.firstChild.nextSibling);

// $ nextElementSibling: returns the element node immediately following the specified one in its parent's child node list.
// or return null if the specified node is the last node in that list.
// It ignores the text nodes and comments nodes and any whitespace.
document.write(
    `Next Element Node Sibling of first Element Node child of h2 element: ${h2.firstElementChild.nextElementSibling} <br>`
);
console.log(h2.firstElementChild.nextElementSibling);

// Lets manipulate it
document.write(
    `Old value of span element inside h2 is: ${h2.firstElementChild.nextElementSibling.textContent}<br>`
);

h2.firstElementChild.nextElementSibling.textContent = "Shradhansh.....";
document.write(
    ` NOW new value is: ${h2.firstElementChild.nextElementSibling.textContent} Now see up<br>`
);