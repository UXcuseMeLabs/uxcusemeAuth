export interface Session {
    userId: string;
    authToken: string;
}
export declare const getMainDomain: () => string;
/**
 * Set the session in the cookies
 */
export declare const set: (data: Session) => void;
/**
 * Get the session from the cookies
 */
export declare const get: () => Session | undefined;
/**
 * Check if the session is active
 */
export declare const isSessionActive: () => boolean;
/**
 * Remove the session from the cookies
 */
export declare const remove: () => void;
/**
 * Get the user id from the session
 */
export declare const getUser: () => string | undefined;
export declare const SessionStorage: {
    set: (data: Session) => void;
    get: () => Session | undefined;
    remove: () => void;
    getUser: () => string | undefined;
    isSessionActive: () => boolean;
};
export declare const goToLogin: (redirect?: boolean | string) => void;
