"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPlatformAccess = exports.SessionStorage = exports.AuthProvider = exports.useAuthorization = exports.useSession = void 0;
var useSession_1 = require("./useSession");
Object.defineProperty(exports, "useSession", { enumerable: true, get: function () { return useSession_1.useSession; } });
var useAuthorization_1 = require("./useAuthorization");
Object.defineProperty(exports, "useAuthorization", { enumerable: true, get: function () { return useAuthorization_1.useAuthorization; } });
var authProvider_1 = require("./authProvider");
Object.defineProperty(exports, "AuthProvider", { enumerable: true, get: function () { return authProvider_1.AuthProvider; } });
var sessionStorage_1 = require("./utils/sessionStorage");
Object.defineProperty(exports, "SessionStorage", { enumerable: true, get: function () { return sessionStorage_1.SessionStorage; } });
var useAuthorization_2 = require("./useAuthorization");
Object.defineProperty(exports, "hasPlatformAccess", { enumerable: true, get: function () { return useAuthorization_2.hasPlatformAccess; } });
//# sourceMappingURL=index.js.map