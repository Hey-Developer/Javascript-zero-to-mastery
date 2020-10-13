/* 
# Local Storage-->
  The localStorage is a read-only property of window object, it stores data in a web browser specifically to the domain and protocol. 
  it doesn't get sent to the server as it is stored locally in the web browser with no expiration date.
  The data will not be deleted when the browser is closed and reopened.
  > window.localStorage;

$ Methods:
  * Note: the value is only taken as string if u provide a number it will automatically be converted into string;
  
  -- setItem(key,value)- It allows to add a key/ value pair to the stored object.
     If the key already exists, the new value will overwrite the old value.

  -- getItem(key,value)- It returns the value of the item that is set with the given key.

  -- ket(n)- it returns the key of the item in the storage object at the nth index which can be useful for looping.

  -- removeItem(key)- it removes the item in the storage object with the given key.
*/

window.localStorage.setItem("username", "geeky");
window.localStorage.setItem("useremail", "hey.cnu09@gmail.com");

console.log(localStorage);

// Getting value through Key;
console.log(localStorage.getItem("username"));

// Getting key through index:
console.log(localStorage.length);
console.log(localStorage.key(0));
console.log(localStorage.key(1));

// Removing item using Key:
// localStorage.removeItem("username");

// removing All-->
// localStorage.clear();

var todo = JSON.parse(localStorage.getItem("item"));
console.log(todo);