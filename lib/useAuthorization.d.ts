import { User } from "./utils/userapi";
export type Platform = "home" | "interComment";
export declare const hasPlatformAccess: (user: User | null, platform?: Platform) => boolean;
export declare const useAuthorization: (platform?: Platform) => {
    session: import("./utils/sessionStorage").Session | undefined;
    user: User | null;
    loading: boolean;
    hasAccess: boolean;
};
