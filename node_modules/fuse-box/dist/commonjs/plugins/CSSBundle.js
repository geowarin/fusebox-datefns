"use strict";
class CSSBundleClass {
    constructor(opts) {
        this.test = /\.css$/;
    }
    init(context) { }
    transformGroup(group) {
        console.log("Transform group");
    }
}
exports.CSSBundleClass = CSSBundleClass;
;
exports.CSSBundle = (opts = {}) => {
    return new CSSBundleClass(opts);
};
