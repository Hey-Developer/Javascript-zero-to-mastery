/* 
$ Right now, there’s another, more modern method fetch, that somewhat deprecates XMLHttpRequest.
  In modern web-development XMLHttpRequest is used for three reasons:
  -> Historical reasons: we need to support existing scripts with XMLHttpRequest.
  -> We need to support old browsers, and don’t want polyfills (e.g. to keep scripts tiny).
  -> We need something that fetch can’t do yet, e.g. to track upload progress.

$ The fetch specification differs from ajax() xhr in three main ways:
  -> The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

  -> fetch() won't receive cross-site cookies; you can’t establish a cross site session using fetch. Set-Cookie headers from other sites are silently ignored.

  -> fetch won’t send cookies, unless you set the credentials init option. (Since Aug 25, 2017. The spec changed the default credentials policy to same-origin. Firefox changed since 61.0b13.)
  
*/