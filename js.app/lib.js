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
var NS_Storage;
(function (NS_Storage) {
    //
    const utilStorage = new LL.ProxyStorage(localStorage, "-_-~/ll/html/0/");
    //
    let KeyStorage;
    (function (KeyStorage) {
        KeyStorage["ServerFirst"] = "server_first";
        KeyStorage["Address"] = "address";
    })(KeyStorage || (KeyStorage = {}));
    //
    function getServerFirst() { return utilStorage.getItem(KeyStorage.ServerFirst) || ""; }
    NS_Storage.getServerFirst = getServerFirst;
    function setServerFirst(serverFirst) { utilStorage.setItem(KeyStorage.ServerFirst, serverFirst); }
    NS_Storage.setServerFirst = setServerFirst;
    //
    function getAddress() { return utilStorage.getItem(KeyStorage.Address); }
    NS_Storage.getAddress = getAddress;
    function setAddress(address) { utilStorage.setItem(KeyStorage.Address, address); }
    NS_Storage.setAddress = setAddress;
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
