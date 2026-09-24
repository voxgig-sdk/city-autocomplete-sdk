"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityAutocompleteError = void 0;
class CityAutocompleteError extends Error {
    isCityAutocompleteError = true;
    sdk = 'CityAutocomplete';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CityAutocompleteError = CityAutocompleteError;
//# sourceMappingURL=CityAutocompleteError.js.map