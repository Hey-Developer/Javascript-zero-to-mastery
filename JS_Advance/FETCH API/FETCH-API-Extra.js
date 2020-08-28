/* 
https://javascript.info/fetch-api

$ referrer, referrerPolicy:
  >> These options govern how fetch sets HTTP Referer header.

  >> Usually that header is set automatically and contains the url of the page that made the request. In most scenarios, it’s not important at all, sometimes, for security purposes, it makes sense to remove or shorten it.

  >> To send no referer, set an empty string:
     fetch('/page', {
       referrer: "" // no Referer header
     });
    -> To set another url within the current origin:
    fetch('/page', {
      // assuming we're on https://javascript.info
      // we can set any Referer header, but only within the current origin
      referrer: "https://javascript.info/anotherpage"
    });

  >> The referrerPolicy option sets general rules for Referer.
     Requests are split into 3 types:
     -> Request to the same origin.
     -> Request to another origin.
     -> Request from HTTPS to HTTP (from safe to unsafe protocol).

  >> Unlike referrer option that allows to set the exact Referer value, referrerPolicy tells the browser general rules for each request type.
     Possible values are described in the Referrer Policy specification:
     -> Value	                                        To same origin	    To another origin	    HTTPS→HTTP
     -> "no-referrer"	                                      -	                    -	                 -
     -> "no-referrer-when-downgrade" or "" (default)	     full	               full	                 -
     -> "origin"	                                        origin	              origin               origin
     -> "origin-when-cross-origin"	                         full                 origin               origin
     -> "same-origin"	                                     full                  	-                    -
     -> "strict-origin"	                                    origin                origin                 -
     -> "strict-origin-when-cross-origin"	                 full	              origin	             -
     -> "unsafe-url"	                                     full	               full	                full

*/