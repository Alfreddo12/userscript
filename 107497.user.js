// ==UserScript==
// @name 99% Offer Approver
// @namespace www.prizerebel.com
// @description Finds pixels on webpages and highlights them.
// @author EzxMonEyx187
// @homepage www.prizerebel.com

// ==/UserScript==
(function() {
var css = "@namespace url(http://www.w3.org/1999/xhtml); img[width=\"1\"], img[height=\"1\"] { border:solid 30px green !important; }";
if (typeof GM_addStyle != "undefined") {
GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
addStyle(css);
} else {
var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
heads[0].appendChild(node);
}
}
})();