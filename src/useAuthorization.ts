import { User } from "./utils/userapi";
import { useEffect, useRef } from "react";
import { useSession } from "./useSession";
import { goToLogin } from "./utils/sessionStorage";

export type Platform = "home" | "interComment";

export const hasPlatformAccess = (user: User | null, platform?: Platform): boolean => {
  if (!user || !platform) return false;

  const platformMap = {
    home: user.platformConfigHome.authorization,
    interComment: user.platformConfigInterComment.authorization,
  };

  return platformMap[platform] ?? false;
};


export const useAuthorization = (platform?: Platform) => {
  const { session, user, loading } = useSession();
  const redirected = useRef(false); // bandera de seguridad

  useEffect(() => {
    if (loading || redirected.current) return;
    
    if (!session) {
      redirected.current = true;
      goToLogin(true);
      return;
    }

    if (platform && !hasPlatformAccess(user, platform)) {
      redirected.current = true;
      goToLogin(true);
    }

  }, [loading, session, user, platform]);

  return { session, user, loading, hasAccess: hasPlatformAccess(user, platform) };
};
