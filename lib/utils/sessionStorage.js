"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToLogin = exports.SessionStorage = exports.getUser = exports.remove = exports.isSessionActive = exports.get = exports.set = exports.getMainDomain = void 0;
var universal_cookie_1 = __importDefault(require("universal-cookie"));
var ID = "userinterfake-platform-session";
var cookies = new universal_cookie_1.default();
var getMainDomain = function () {
    var domain = window.location.hostname;
    return domain.split(".").slice(-2).join(".");
};
exports.getMainDomain = getMainDomain;
/**
 * Set the session in the cookies
 */
var set = function (data) {
    var domain = (0, exports.getMainDomain)();
    cookies.set(ID, data, {
        domain: domain,
        maxAge: 60 * 60 * 24 * 365 * 100,
    });
};
exports.set = set;
/**
 * Get the session from the cookies
 */
var get = function () {
    return cookies.get(ID);
};
exports.get = get;
/**
 * Check if the session is active
 */
var isSessionActive = function () {
    return Boolean((0, exports.get)());
};
exports.isSessionActive = isSessionActive;
/**
 * Remove the session from the cookies
 */
var remove = function () {
    var domain = (0, exports.getMainDomain)();
    cookies.remove(ID, { domain: domain });
};
exports.remove = remove;
/**
 * Get the user id from the session
 */
var getUser = function () {
    var session = (0, exports.get)();
    return session === null || session === void 0 ? void 0 : session.userId;
};
exports.getUser = getUser;
exports.SessionStorage = {
    set: exports.set,
    get: exports.get,
    remove: exports.remove,
    getUser: exports.getUser,
    isSessionActive: exports.isSessionActive,
};
var goToLogin = function (redirect) {
    if (redirect === void 0) { redirect = true; }
    var domain = (0, exports.getMainDomain)();
    var loginUrl = domain === "localhost"
        ? "http://localhost:3000/login"
        : "https://".concat(domain, "/login");
    if (window.location.pathname.startsWith("/login"))
        return; // ✅ Evita redireccionar si ya estamos en login
    if (redirect === true)
        redirect = window.location.href;
    var url = redirect ? "".concat(loginUrl, "?redirect=").concat(redirect) : loginUrl;
    window.location.href = url;
};
exports.goToLogin = goToLogin;
//# sourceMappingURL=sessionStorage.js.map