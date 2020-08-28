/* 
$ Location Object:
  This is used to access the current location(URL) of the window.
  The Location object can be both read and replaced, so it is possible to update the location of a page through scripting.
  > Syntax: window.location.property/methods;
    ~ property:
      -- hash: the part of the url including and following the # symbol.     -- host
      -- hostname: The hostname and the port number.
      -- href: entire URL
      -- pathname: path relative to the host
      -- port: port number
      -- protocol: protocol of the URL
      -- search: The part of the URL including and after then ?
    
  > Try all these properties on live website.
*/
// You can also manipulate the following properties;
document.write(`hash--${window.location.hash}<br><br>`);
document.write(`host--${window.location.host}<br><br>`);
document.write(`hostname--${window.location.hostname}<br><br>`);
document.write(`href--${window.location.href}<br><br>`);
document.write(`pathname--${window.location.pathname}<br><br>`);
document.write(`port--${window.location.port}<br><br>`);
document.write(`protocol--${window.location.protocol}<br><br>`);
document.write(`search--${window.location.search}<br><br>`);

/* 
~ location methods:
  -- assign(URL): it changes the location of the current page with the passed im URl.
  -- reload()- reload the current page.
  -- replace(URL): replaces the current page with the given url in history.As it is replaced in history, it won't be possible to access the current page with back/forward.

*/

function reLoad() {
    window.location.reload();
}
document.getElementById("reload").addEventListener("click", reLoad);

function google() {
    window.location.assign("https://www.google.com");
}
document.getElementById("google").addEventListener("click", google);

function repLace() {
    window.location.replace("https://www.facebook.com");
}
document.getElementById("fb").addEventListener("click", repLace);