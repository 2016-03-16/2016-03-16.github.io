"use strict";
var NS_App_Root;
(function (NS_App_Root) {
    function drawBody() {
        innerBody(`<a href="/">/</a>`);
    }
    NS_App_Root.drawBody = drawBody;
    function innerBody(body) {
        const ele = document.getElementById(NS_ID.APP_Root);
        if (ele)
            return ele.innerHTML = body;
        document.body.innerHTML = body;
    }
})(NS_App_Root || (NS_App_Root = {}));
(function (NS_App_Root) {
    function main() {
        NS_App_Root.drawBody();
    }
    NS_App_Root.main = main;
})(NS_App_Root || (NS_App_Root = {}));
NS_App_Root.main();
