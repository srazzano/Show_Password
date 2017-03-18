// ==UserScript==
// @name        Show Password onHover/onFocus
// @namespace   srazzano
// @include     *
// @description	Show password when hover/focus on password field
// @author      Sonny Razzano
// @version     1.0.0
// @icon        https://raw.githubusercontent.com/srazzano/Images/master/password2.png
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