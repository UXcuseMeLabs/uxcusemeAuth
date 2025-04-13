"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = exports.AuthContext = void 0;
var react_1 = __importStar(require("react"));
var useSession_1 = require("./useSession");
var useAuthorization_1 = require("./useAuthorization");
exports.AuthContext = (0, react_1.createContext)({
    loading: true,
    onLogout: function () { },
});
var AuthProvider = function (_a) {
    var children = _a.children, platform = _a.platform, onSession = _a.onSession, _b = _a.requireAuth, requireAuth = _b === void 0 ? true : _b;
    var _c = (0, useSession_1.useSession)(), session = _c.session, user = _c.user, loading = _c.loading, onLogout = _c.onLogout;
    (0, react_1.useEffect)(function () {
        if (!loading && session && user) {
            if (requireAuth && !(0, useAuthorization_1.hasPlatformAccess)(user, platform)) {
                return onLogout();
            }
            onSession === null || onSession === void 0 ? void 0 : onSession({ session: session, user: user });
        }
    }, [loading, session, user]);
    return (react_1.default.createElement(exports.AuthContext.Provider, { value: { session: session, user: user, onLogout: onLogout, loading: loading } }, children));
};
exports.AuthProvider = AuthProvider;
var useAuth = function () { return (0, react_1.useContext)(exports.AuthContext); };
exports.useAuth = useAuth;
//# sourceMappingURL=authProvider.js.map