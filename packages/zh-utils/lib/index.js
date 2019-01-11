"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
class ZhUtils {
}
ZhUtils.capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
ZhUtils.sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
ZhUtils.dataFormatYYYYMMDD = (data) => {
    let r = data;
    if (typeof data === "string") {
        r = Number(data);
    }
    return dayjs_1.default(r).format("YYYY-MM-DD");
};
exports.default = ZhUtils;
