// ==UserScript==
// @name        Show Password onHover/onFocus
// @version     1.0.0
// @description Show password when hover/focus on password field
// @author      Sonny Razzano aka srazzano
// @namespace   srazzano
// @include     *
// @icon        https://raw.githubusercontent.com/srazzano/Images/master/password2.png
// @homepageURL https://github.com/srazzano/Show_Password/blob/master/Show_Password.user.js
// @download    https://raw.githubusercontent.com/srazzano/Show_Password/master/Show_Password.user.js
// @support     srazzano@gmail.com
// @grant       none
// ==/UserScript==

/* jshint multistr:true */

(function () {

  "use strict";
  
  var onHover = true; // false for onFocus

  window.setTimeout(function() {
    var passFields = document.querySelectorAll("input[type='password']");
    if (!passFields.length) return;
    for (var i = 0; i < passFields.length; i++) {
      if (onHover) {
        passFields[i].addEventListener("mouseover", function() {this.type = "text";}, false);
        passFields[i].addEventListener("mouseout", function() {this.type = "password";}, false);
      } else {
        passFields[i].addEventListener("focus", function() {this.type = "text";}, false);
        passFields[i].addEventListener("blur", function() {this.type = "password";}, false);
    } }
  }, 1000);

})();
