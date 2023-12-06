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
var NS_App_Search;
(function (NS_App_Search) {
    function load() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield loadRemote();
        });
    }
    NS_App_Search.load = load;
    function loadRemote() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = NS_Storage.data.getItem(NS_Storage.KEY.Address);
            if (!address)
                return [];
            //
            const res = yield NS_XHR.request(address.ServerSearch);
            if (res)
                return browserify.yamljs.parse(res).data;
            //
            return [];
        });
    }
})(NS_App_Search || (NS_App_Search = {}));
(function (NS_App_Search) {
    NS_App_Search.ID_Input = Math.random().toString(36).slice(2);
    //
    function row2string(row) {
        return `<input type="button" value="${row.value}" onclick="NS_App_Search.onSearch('${row.href}')" />`;
    }
    //
    function drawBody(data, value) {
        const menu = data.map(list => list.map(row2string).join("")).join("<br />");
        //
        const content = `\
<hr />
<input type="text" id="${NS_App_Search.ID_Input}" value="${value}" />
<br />
${menu}
<hr />
`;
        innerBody(content);
    }
    NS_App_Search.drawBody = drawBody;
    function innerBody(body) {
        const ele = document.getElementById(NS_ID.APP_Search);
        if (ele)
            return ele.innerHTML = body;
        document.body.innerHTML = body;
    }
})(NS_App_Search || (NS_App_Search = {}));
(function (NS_App_Search) {
    function getInputValue() {
        const ele = document.getElementById(NS_App_Search.ID_Input);
        return ele.value;
    }
    function onSearch(href) {
        const value = getInputValue();
        //
        NS_Storage.data.setItem(NS_Storage.KEY.SearchValue, value);
        //
        const address = href + value;
        //
        // location.href = address
        // location.replace(address)
        location.assign(address);
    }
    NS_App_Search.onSearch = onSearch;
})(NS_App_Search || (NS_App_Search = {}));
(function (NS_App_Search) {
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield NS_App_Search.load();
            const value = NS_Storage.data.getItem(NS_Storage.KEY.SearchValue) || "";
            //
            data.length && NS_App_Search.drawBody(data, value);
        });
    }
    NS_App_Search.main = main;
})(NS_App_Search || (NS_App_Search = {}));
NS_App_Search.main();
