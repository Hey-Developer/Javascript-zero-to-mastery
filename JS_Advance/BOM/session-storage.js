/* 
# Session-Storage:
  The sessionStorage is a read only property of window object it stores data in a web browser specifically to the domain and protocol for a particular session.
  It doesn't get sent to the server. data Stored in sessionStorage get cleared when the page session end.
  A page session lasts for as long as the browser is open and survives over page reloads and restores.
  > window.sessionStorage;

  $ Methods:
    * Note: the value is only taken as string if u provide a number it will automatically be converted into string;
  -- setItem(key,value)- It allows to add a key/ value pair to the stored object.
     If the key already exists, the new value will overwrite the old value.

  -- getItem(key)- It returns the value of the item that is set with the given key.

  -- ket(n)- it returns the key of the item in the storage object at the nth index which can be useful for looping.

  -- removeItem(key)- it removes the item in the storage object with the given key.
*/

window.sessionStorage.setItem("userTheme", "Dark");
window.sessionStorage.setItem("userMood", "Happy");
console.log(sessionStorage);

// Getting value from key:
console.log(sessionStorage.getItem("userTheme"));

// Getting key from index:
console.log(sessionStorage.length);
console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
console.log(sessionStorage.key(2));

// Removing item:
sessionStorage.removeItem("userMood");

// Removing All:
sessionStorage.clear();