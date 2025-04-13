"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthorization = exports.hasPlatformAccess = void 0;
var react_1 = require("react");
var useSession_1 = require("./useSession");
var sessionStorage_1 = require("./utils/sessionStorage");
var hasPlatformAccess = function (user, platform) {
    var _a;
    if (!user || !platform)
        return false;
    var platformMap = {
        home: user.platformConfigHome.authorization,
        interComment: user.platformConfigInterComment.authorization,
    };
    return (_a = platformMap[platform]) !== null && _a !== void 0 ? _a : false;
};
exports.hasPlatformAccess = hasPlatformAccess;
var useAuthorization = function (platform) {
    var _a = (0, useSession_1.useSession)(), session = _a.session, user = _a.user, loading = _a.loading;
    var redirected = (0, react_1.useRef)(false); // bandera de seguridad
    (0, react_1.useEffect)(function () {
        if (loading || redirected.current)
            return;
        if (!session) {
            redirected.current = true;
            (0, sessionStorage_1.goToLogin)(true);
            return;
        }
        if (platform && !(0, exports.hasPlatformAccess)(user, platform)) {
            redirected.current = true;
            (0, sessionStorage_1.goToLogin)(true);
        }
    }, [loading, session, user, platform]);
    return { session: session, user: user, loading: loading, hasAccess: (0, exports.hasPlatformAccess)(user, platform) };
};
exports.useAuthorization = useAuthorization;
//# sourceMappingURL=useAuthorization.js.map