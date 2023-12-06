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
var NS_ID;
(function (NS_ID) {
    NS_ID.APP_Root = "LL/APP/Root";
    NS_ID.APP_Search = "LL/APP/Search";
})(NS_ID || (NS_ID = {}));
var NS_Storage;
(function (NS_Storage) {
    //
    let KEY;
    (function (KEY) {
        KEY["ServerFirst"] = "server_first";
        KEY["Address"] = "address";
        KEY["SearchValue"] = "search_value";
    })(KEY = NS_Storage.KEY || (NS_Storage.KEY = {}));
    //
    NS_Storage.data = new LL.ProxyStorage(localStorage, "-_-~/ll/html/0/");
})(NS_Storage || (NS_Storage = {}));
var NS_XHR;
(function (NS_XHR) {
    function request(href) {
        return __awaiter(this, void 0, void 0, function* () {
            const xhr = new XMLHttpRequest;
            return yield xhr.ll.get(href)
                .promise()
                .then(xhr => xhr.response)
                .catch(function (event) { console.error(event[LL.ProxyXMLHttpRequest.Symbol_Reason]); });
        });
    }
    NS_XHR.request = request;
})(NS_XHR || (NS_XHR = {}));
