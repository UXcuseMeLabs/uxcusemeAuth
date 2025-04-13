import React from "react";
import { Platform } from "./useAuthorization";
import { Session } from "./utils/sessionStorage";
import { User } from "./utils/userapi";
interface AuthContextProps {
    session?: Session;
    user?: User | null;
    onLogout: () => void;
    loading: boolean;
}
export declare const AuthContext: React.Context<AuthContextProps>;
export interface AuthProviderProps {
    platform?: Platform;
    children: React.ReactNode;
    onSession?: (v: {
        session: Session;
        user: User;
    }) => void;
    requireAuth?: boolean;
}
export declare const AuthProvider: ({ children, platform, onSession, requireAuth, }: AuthProviderProps) => React.JSX.Element;
export declare const useAuth: () => AuthContextProps;
export {};
