"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var ZhUtils = (function () {
    function ZhUtils() {
    }
    ZhUtils.capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    ZhUtils.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ZhUtils.dataFormatYYYYMMDD = function (data) {
        var r = data;
        if (typeof data === "string") {
            r = Number(data);
        }
        return dayjs_1.default(r).format("YYYY-MM-DD");
    };
    return ZhUtils;
}());
exports.default = ZhUtils;
