/* 
$ FormData: (it is just like an array of array in which each array contain a key and value of each form field.. )
  The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

  You can also pass it directly to the URLSearchParams constructor if you want to generate query parameters in the way a <form> would do if it were using simple GET submission.

  An object implementing FormData can directly be used in a for...of structure, instead of entries(): for (var p of myFormData) is equivalent to for (var p of myFormData.entries()).

  >> Constructor:
  -- FormData() : Creates a new FormData object.
     Parameters: form (Optional) 
     An HTML <form> element — when specified, the FormData object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.
*/
var form_data = new FormData(); // Currently empty
/*
  >> MEthods:
     --FormData.append()
       *Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.
     --FormData.delete()
       *Deletes a key/value pair from a FormData object.
     --FormData.entries()
       *Returns an iterator allowing to go through all key/value pairs contained in this object.
     --FormData.get()
       *Returns the first value associated with a given key from within a FormData object.
     --FormData.getAll()
       *Returns an array of all the values associated with a given key from within a FormData.
     --FormData.has()
       *Returns a boolean stating whether a FormData object contains a certain key.
     --FormData.keys()
       *Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
     --FormData.set()
       *Sets a new value for an existing key inside a FormData object, or adds the key/value if it does not already exist.
     --FormData.values()
       *Returns an iterator allowing to go through all values  contained in this object.
*/

// >> You could add a key/value pair to this using FormData.append:
form_data.append("Name", "Cnu");

// >>Or you can specify the optional form argument when creating the FormData object, to prepopulate it with values from the specified form:
const user = document.forms.userData;
var form_data_1 = new FormData(user);

// --The special thing about FormData is that network methods, such as fetch, can accept a FormData object as a body. It’s encoded and sent out with Content-Type: multipart/form-data.

//$ Sending a simple form
const form_data_2 = new FormData(userData);
console.log(Array.from(form_data_2));

userData.onsubmit = async e => {
    e.preventDefault();
    for (let key of form_data_2.keys()) {
        console.log(key, form_data_2.get(key));
    }
    let response = await fetch("user.php", {
        method: "POST",
        body: form_data_2,
    });

    let result = await response.json();

    alert(result.message);
};

//? WHY FormData: instead of sending each form field  data individually, we can send a bunch of all the form fields with values and key.. for sake of ease we use formData||

//! For formData to be working it is compulsory that each from field must have a name attribute otherwise the key in the formData will be empty.

/* 
$ FormData Methods-->
  We can modify fields in FormData with methods:
  -->formData.append(name, value) – 
     add a form field with the given name and value,

  -->formData.append(name, blob, fileName) – 
     add a field as if it were <input type="file">, the third argument fileName sets file name (not form field name), as it were a name of the file in user’s filesystem,

  -->formData.delete(name) – 
     remove the field with the given name,

  -->formData.get(name) –
     get the value of the field with the given name,

  -->formData.has(name) – 
     if there exists a field with the given name, returns true, otherwise false

  *There’s also method set, with the same syntax as append. The difference is that .set removes all fields with the given name, and then appends a new field. So it makes sure there’s only one field with such name, the rest is just like append:
  -->formData.set(name, value),

  -->formData.set(name, blob, fileName).
*/

// $Also we can iterate over formData fields using for..of loop:
let formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// List key/value pairs
for (let [name, value] of formData) {
    alert(`${name} = ${value}`); // key1=value1, then key2=value2
}

/* 
$ Sending a form with a file
  The form is always sent as Content-Type: multipart/form-data, this encoding allows to send files. So, <input type="file"> fields are sent also, similar to a usual form submission.
  
   <form id="formElem">
   <input type="text" name="firstName" value="John">
   Picture: <input type="file" name="picture"  accept="image/*">
   <input type="submit">
 </form>
 
 <script>
   formElem.onsubmit = async (e) => {
     e.preventDefault();
 
     let response = await fetch('/article/formdata/post/ user-avatar', {
       method: 'POST',
       body: new FormData(formElem)
     });
 
     let result = await response.json();
 
     alert(result.message);
   };
  </script>

*/

/* 
$ Sending a form with Blob data:
  As we’ve seen in the chapter Fetch, it’s easy to send dynamically generated binary data e.g. an image, as Blob. We can supply it directly as fetch parameter body.

  In practice though, it’s often convenient to send an image not separately, but as a part of the form, with additional fields, such as “name” and other metadata.

  Also, servers are usually more suited to accept multipart-encoded forms, rather than raw binary data.

  This example submits an image from <canvas>, along with some other fields, as a form, using FormData:

<body style="margin:0">
  <canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>

  <input type="button" value="Submit" onclick="submit()">

  <script>
    canvasElem.onmousemove = function(e) {
      let ctx = canvasElem.getContext('2d');
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    async function submit() {
      let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

      let formData = new FormData();
      *formData.append("firstName", "John");
      *formData.append("image", imageBlob, "image.png");

      let response = await fetch('/article/formdata/post/image-form', {
        method: 'POST',
        body: formData
      });
      let result = await response.json();
      alert(result.message);
    }

  </script>
</body>

*/

/* 
$$ formData sending using XHR object..
   var formData = new FormData();
   
   formData.append("username", "Groucho");
   formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"
   
   // HTML file input, chosen by user
   formData.append("userfile", fileInputElement.files[0]);
   
   // JavaScript file-like object
   var content = '<a id="a"><b id="b">hey!</b></a>'; // the    body of the new file...
   var blob = new Blob([content], { type: "text/xml"});
   
   formData.append("webmasterfile", blob);
   
   var request = new XMLHttpRequest();
   request.open("POST", "http://foo.com/submitform.php");
   request.send(formData);


*/

/* 
$ Using a formdata event:
  A more recent addition to the platform than the FormData object is the formdata event — this is fired on an HTMLFormElement object after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a FormData() constructor.

  This allows a FormData object to be quickly obtained in response to a formdata event firing, rather than needing to put it together yourself.

  --When the formdata event fires we can access the FormData object using FormDataEvent.formData, then do what we like with it.

  formElem.addEventListener('formdata', (e) => {
  console.log('formdata fired');
 
  // Get the form data from the event object
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }
 
  // submit the data via XHR
   fetch(server.php,{
    methods:"POST",
    body:data
  });
  .then((response) => {
     response.json();
  })
  .then((result) => {
    alert(result.message)
  })
  

  
});
*/

/* 
$$ Submitting forms without the FormData API-->
   Using nothing but XMLHttpRequest:
   > using the POST method and setting the enctype attribute to application/x-www-form-urlencoded (default);
   
   > using the POST method and setting the enctype attribute to text/plain;
   
   > using the POST method and setting the enctype attribute to multipart/form-data;
   
   > using the GET method (in this case the enctype attribute will be ignored).
   


*/