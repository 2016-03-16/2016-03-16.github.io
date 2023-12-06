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
var NS_APP_Scheme;
(function (NS_APP_Scheme) {
    function load() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield loadRemote();
        });
    }
    NS_APP_Scheme.load = load;
    function loadRemote() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = NS_Storage.data.getItem(NS_Storage.KEY.Address);
            if (!address)
                return [];
            //
            const res = yield NS_XHR.request(address.ServerScheme);
            if (res)
                return browserify.yamljs.parse(res).data;
            //
            return [];
        });
    }
})(NS_APP_Scheme || (NS_APP_Scheme = {}));
(function (NS_APP_Scheme) {
    function drawBody(data) {
        const list = data.map(row => '<a href="${href}">${content}</a>'.ll.format(row));
        const body = list.join("<br />");
        innerBody(body);
    }
    NS_APP_Scheme.drawBody = drawBody;
    function innerBody(body) {
        document.body.innerHTML = body;
    }
})(NS_APP_Scheme || (NS_APP_Scheme = {}));
(function (NS_APP_Scheme) {
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield NS_APP_Scheme.load();
            //
            data.length && NS_APP_Scheme.drawBody(data);
        });
    }
    NS_APP_Scheme.main = main;
})(NS_APP_Scheme || (NS_APP_Scheme = {}));
NS_APP_Scheme.main();
