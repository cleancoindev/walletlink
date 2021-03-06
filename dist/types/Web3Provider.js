"use strict";
// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", { value: true });
var ProviderErrorCode;
(function (ProviderErrorCode) {
    ProviderErrorCode[ProviderErrorCode["USER_DENIED_REQUEST_ACCOUNTS"] = 4001] = "USER_DENIED_REQUEST_ACCOUNTS";
    ProviderErrorCode[ProviderErrorCode["USER_DENIED_CREATE_ACCOUNT"] = 4010] = "USER_DENIED_CREATE_ACCOUNT";
    ProviderErrorCode[ProviderErrorCode["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
    ProviderErrorCode[ProviderErrorCode["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
    ProviderErrorCode[ProviderErrorCode["USER_DENIED_REQUEST_SIGNATURE"] = -32603] = "USER_DENIED_REQUEST_SIGNATURE";
})(ProviderErrorCode = exports.ProviderErrorCode || (exports.ProviderErrorCode = {}));
class ProviderError extends Error {
    constructor(message, code, data) {
        super(message || "Provider Error");
        this.code = code;
        this.data = data;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
}
exports.ProviderError = ProviderError;
