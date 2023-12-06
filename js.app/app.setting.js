"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var NS_APP_Setting;
(function (NS_APP_Setting) {
    NS_APP_Setting.ID_Input = Math.random().toString(36).slice(2);
    NS_APP_Setting.ID_Output = Math.random().toString(36).slice(2);
    //
    function drawBody(value) {
        //
        const content = `\
<hr />
<input type="text" id="${NS_APP_Setting.ID_Input}" value="${value}" />
<input type="button" value="update" onclick="NS_APP_Setting.onUpdate()" />
<hr />
<p id="${NS_APP_Setting.ID_Output}">${value}</p>
<hr />
`;
        innerBody(content);
    }
    NS_APP_Setting.drawBody = drawBody;
    function innerBody(body) {
        document.body.innerHTML = body;
    }
})(NS_APP_Setting || (NS_APP_Setting = {}));
(function (NS_APP_Setting) {
    function getInputValue() {
        const ele = document.getElementById(NS_APP_Setting.ID_Input);
        return ele.value;
    }
    function setOutputText(textContent) {
        const ele = document.getElementById(NS_APP_Setting.ID_Output);
        ele.textContent = textContent;
    }
    function onUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            const value = getInputValue();
            //
            const res = yield NS_XHR.request(value);
            if (!res)
                return;
            //
            setOutputText(value);
            NS_Storage.data.setItem(NS_Storage.KEY.ServerFirst, value);
            NS_Storage.data.setItem(NS_Storage.KEY.Address, browserify.yamljs.parse(res));
        });
    }
    NS_APP_Setting.onUpdate = onUpdate;
})(NS_APP_Setting || (NS_APP_Setting = {}));
(function (NS_APP_Setting) {
    function main() {
        const serverFirst = NS_Storage.data.getItem(NS_Storage.KEY.ServerFirst) || "";
        NS_APP_Setting.drawBody(serverFirst);
    }
    NS_APP_Setting.main = main;
})(NS_APP_Setting || (NS_APP_Setting = {}));
NS_APP_Setting.main();
