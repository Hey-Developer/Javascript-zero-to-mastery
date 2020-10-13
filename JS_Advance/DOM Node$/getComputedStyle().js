/* 
$ What is Computed Style:
  It is the style actually used in displaying the element, after "stylings" from multiple sources hae been applied.
  Style sources included:
  > Internal style sheets.
  > External style sheets.
  > Inherited style sheets.
  > Browser Default styles.

  ~ My Definition: the final style which is applied on the element  is known as Computed Style:
    For ex- suppose u have a p element in your html doc and u set its color to red in external styles sheet,
    And then you again add  color:blue; to it in internal style sheets,
    And once again u add color to white in inline style,
    Then as we all know inline style have higher priority hence p element color will be white:
    Thi final style is known as Computed Style:(Which is displayed in browser window.)

  ~ We know that using style property we can only access inline style of an element.
  ~ But window.getComputedStyle() can access all style(-inline-internal-external-)
    > window.getComputedStyle() returns a live Css_Style_Declaration_Object, which update itself automatically when the element's style is changed.
  * Note: getComputedStyle() this property is read only property. whereas style property is read and write property.

*/
var p = document.getElementById("myPara1");
var allCssOfP = window.getComputedStyle(p);
console.log(allCssOfP);
console.log(allCssOfP[3]);
console.log(allCssOfP.fontSize);
console.log(allCssOfP.color);
console.log(allCssOfP.backgroundColor);