/* 
# What Are Cookies?
$ Cookies let you store user information in web pages.
> Cookies are data, stored in small text files, on your computer.
> When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
  > Cookies were invented to solve the problem "how to remember information about the user":
    ~ A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. It maintains the state of a user and remembers the user's information among all the web pages.
    ~ When a user visits a web page, his/her name can be stored in a cookie.
    ~ Next time the user visits the page, the cookie "remembers" his/her name.
      Cookies are saved in name-value pairs like:
      username = John Doe

    > When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

# How Cookies Work?
$ When a user sends a request to the server, then each of that request is treated as a new request sent by the different user.

$ So, to recognize the old user, we need to add the cookie with the response from the server.

$ browser at the client-side.

$ Now, whenever a user sends a request to the server, the cookie is added with that request automatically. Due to the cookie, the server recognizes the users.

# Some Examples:
  When we use flipkart site do shopping and add some items in our cart, then when we again visit that site after some time it recognizes us and show us the same cart with addded items,
  This is bcoz flipkart created a user cookie when he/she leaves the site and in that cookie they store information like which items u added in the cart.

  Now Days third party cookie are used to minimize the load in the client machine, hence instead of create cookie on client machine, websites assigned a unique id to each new request made by each new user,
  Then using this id websites access cookies from the third party cookies.

# Types of cookies:
  --1) Session- Cookies: Cookies that are set without expires, It is destroyed when the user quits the browser.

  --2) Persistent-cookies: Cookies that are valid till expiration date then the browser will delete them.

# How to create a Cookie in JavaScript?
  ? JavaScript can create, read, and delete cookies with the document.cookie property.
    ~ When you assign a string to document.cookie, the browser parses it as a cookie and adds it to its list of cookies.
    ~ There are several parts to each cookies, many of them optional.

    > Syntax: document.cookie="name=value";
    > Syntax: document.cookie="name=cookie; expires=date; domain=domain; path=path; secure" 
    > Syntax: document.cookie="name=cookie; max-age=inSeconds; domain=domain; path=path; secure" 

    *Note: name-value pair must not contain any whitespace character, commas or semicolons.
     Ex- "username=geeky shoes";

     > Optional Cookies Attribute:
       max-age
       expires
       domain
       path
       secure

       ? Whenever You omits the optional cookie fields, The browser fills them in automatically with reasonable defaults.
         ~ For Ex- if u don't set max-age or expires browser will set by default that on browser close cookie will delete;
*/

document.cookie = "username=cnu";
console.log(document.cookie);

/* 
$ max-age:
  This attribute is used to create persistent cookie:
  It sets the life of cookie;
*/
// Cookie created for 2 Days:
document.cookie = "usercart=iphone; max-age=" + 60 * 60 * 24 * 2;
console.log(document.cookie);
document.cookie = "usercart=iphone; max-age=" + 60 * 60 * 24 * 2 + "path=/:C";
console.log(document.cookie);

/* 
$ Expires:
  This attribute is used to set the expiration date of the cookie in UTC time:
*/
document.cookie = "UserLike=DarkTheme;expires=Mon, 25 May 2020 12:00:00 UTC ";
console.log(document.cookie);

/* 
$ Domain:
  ~ It specifies the domain for which the cookie is valid. if not specified, this defaults to the host portion of the current document location.
  ~ If a domain is specified, subdomains are always included.
  > EX- document.cookie="username=geeky; domain=geekyShows.com";
      This cookie is also valid for -->
      note.geekyShows.com
      code.geekyShows.com

      But, document.cookie="username=geeky; domain=node.geekyshows.com"
      This cookie will not valid for domain:
      geekyshows.com
*/

/* 
$ Path: 
  ~ It can be /(root) or /myDir(directory).
  ~ If not specified, defaults to the current path of the current document location, as well as its descendants.
  > Ex- document.cookie="username=geeky; path=/"
*/

/* 
$ secure: 
  ~ Cookie to only be transmitted over secure protocol i.e HTTPS; otherwise it will not be transmitted:
  > EX- document.cookie="username=geeky; secure"
*/

/* 
# Replace and Append Cookies:
  ~ When we assign a new cookie value to document.cookie, the current cookie are not replaced.
  ~ The new cookie is parsed and its name-value pair is appended to the list.
  ~ The exception is when you assign a new cookie with the same name(and same domain and path, if they exist) as a cookie that already exist.
  ~ In this case the old value is replaced with new one.

*/

// -- Replace: Name of cookie are same:
document.cookie = "UserTheme=Dark";
console.log(document.cookie);
document.cookie = "UserTheme=Light";
console.log(document.cookie);

// --Append:
document.cookie = "UserAccount=Divyansh";
console.log(document.cookie);
document.cookie = "UserAccountType=personal";
console.log(document.cookie);

/* 
# Reading Cookies:
  ~ We can read cookies by document.cookie.
  > var c =document.cookie;
  * NOTE: document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
  ! The problem occurred when we want to extract some particular part of cookie;
*/

var x = document.cookie;
console.log(x);

function setCookies() {
    document.cookie = "name=" + document.querySelector("#n").value;
    document.cookie = "email=" + document.querySelector("#em").value;
    document.cookie = "language=" + document.querySelector("#ln").value;
    document.querySelector("#n").value = "";
    document.querySelector("#em").value = "";
    document.querySelector("#ln").value = "";
}

function getCookies() {
    let ck = document.cookie.split(";");
    for (let index = 0; index < ck.length; index++) {
        var element = ck[index].split("=");
        if (element[0].trim() == "name") {
            document.querySelector("#n").value = element[1];
        } else if (element[0].trim() == "email") {
            document.querySelector("#em").value = element[1];
        } else if (element[0].trim() == "language") {
            document.querySelector("#ln").value = element[1];
        }
    }
}

/* 
# How To delete a cookie:
  A cookie is deleted by setting a cookie with the same name(and domain and path, if they were set)
  With an expiration date in the past and,
  If u r using max-age then set a negative value.
*/

document.cookie = "myMood=Happy; expires=Mon, 25 May 2020 12:00:00 UTC";
//> Deleting  a cookie;
document.cookie = "myMood=Happy; expires=Mon, 25 May 1970 12:00:00 UTC";

// OR WITH MAX-AGE:
document.cookie = "myMix=Love; max-age=" + 60 * 60 * 24;

// Deleting Cookies:
document.cookie = "myMix=Love; max-age=-60";

/* 
# Updating A Cookie:
  Same concept as replacing a cookie:
   just redefine cookie with same name but different value:
*/
document.cookie = "language=germany";

/* 
# Cookies Security Issues:
  > Can Misuse client details.
  > Can track User.
  > Client can delete cookie.
  > client can Manipulate cookie.
*/

/* 
# Cookie Example-->
~ In the example to follow, we will create a cookie that stores the name of a visitor.

~ The first time a visitor arrives to the web page, he/she will be asked to fill in his/her name. The name is then stored in a cookie.

~ The next time the visitor arrives at the same page, he/she will get a welcome message.

~ For the example we will create 3 JavaScript functions:
  > A function to set a cookie value
  > A function to get a cookie value
  > A function to check a cookie value
*/

// -- a function to set Cookie:
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// -- A Function to Get a Cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// --A Function to Check a Cookie
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}