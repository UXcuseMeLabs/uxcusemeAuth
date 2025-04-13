import { useEffect, useState, useCallback } from "react";
import { Session, SessionStorage } from "./utils/sessionStorage";
import { getByToken, User } from "./utils/userapi";
import { isTokenExpired } from "./utils/auth";

export const useSession = () => {
  const [session, setSession] = useState<Session | undefined>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const onLogout = useCallback(() => {
    SessionStorage.remove();
    setSession(undefined);
    setUser(null);
    setLoading(false);
  }, []);

  const loadSession = useCallback(async () => {
    let session = SessionStorage.get();
    const urlToken = new URLSearchParams(window.location.search).get("token");

    if (urlToken) {
      const userFromToken = await getByToken(urlToken);
      if (!userFromToken) {
        onLogout();
        return;
      }

      session = { userId: userFromToken.id, authToken: urlToken };
      SessionStorage.set(session);
    }

    if (!session || isTokenExpired(session.authToken)) {
      onLogout();
      return;
    }

    const user = await getByToken(session.authToken);
    if (!user) {
      onLogout();
      return;
    }

    setSession(session);
    setUser(user);
    setLoading(false);
  }, [onLogout]);

  useEffect(() => {
    void loadSession();
  }, [loadSession]);

  return { session, user, loading, onLogout };
};
