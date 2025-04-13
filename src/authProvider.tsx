'use client';
import React, { createContext, useContext, useEffect } from "react";
import { useSession } from "./useSession";
import { hasPlatformAccess, Platform } from "./useAuthorization";
import { Session } from "./utils/sessionStorage";
import { User } from "./utils/userapi";

interface AuthContextProps {
  session?: Session;
  user?: User | null;
  onLogout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  loading: true,
  onLogout: () => {},
});

export interface AuthProviderProps {
  platform?: Platform;
  children: React.ReactNode;
  onSession?: (v: { session: Session; user: User }) => void;
  requireAuth?: boolean;
}

export const AuthProvider = ({
  children,
  platform,
  onSession,
  requireAuth = true,
}: AuthProviderProps) => {
  const { session, user, loading, onLogout } = useSession();

  useEffect(() => {
    if (!loading && session && user) {
      if (requireAuth && !hasPlatformAccess(user, platform)) {
        return onLogout();
      }
      onSession?.({ session, user });
    }
  }, [loading, session, user]);

  return (
    <AuthContext.Provider value={{ session, user, onLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
