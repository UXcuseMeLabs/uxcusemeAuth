import Cookies from "universal-cookie";

const ID = "userinterfake-platform-session";

const cookies = new Cookies();

export interface Session {
  userId: string;
  authToken: string;
  zone?: string | null;
}

export const getMainDomain = (): string => {
  const domain = window.location.hostname;
  return domain.split(".").slice(-2).join(".");
};

/**
 * Set the session in the cookies
 */
export const set = (data: Session): void => {
  const domain = getMainDomain();

  cookies.set(ID, data, {
    domain,
    maxAge: 60 * 60 * 24 * 365 * 100,
  });
};

/**
 * Get the session from the cookies
 */
export const get = (): Session | undefined => {
  return cookies.get(ID);
};

/**
 * Check if the session is active
 */
export const isSessionActive = (): boolean => {
  return Boolean(get());
};

/**
 * Remove the session from the cookies
 */
export const remove = (): void => {
  const domain = getMainDomain();
  cookies.remove(ID, { domain });
};

/**
 * Get the user id from the session
 */
export const getUser = (): string | undefined => {
  const session = get();
  return session?.userId;
};

export const SessionStorage = {
  set,
  get,
  remove,
  getUser,
  isSessionActive,
};

export const goToLogin = (redirect: boolean | string = true): void => {
  const domain = getMainDomain();
  const loginUrl =
    domain === "localhost"
      ? "http://localhost:3000/login"
      : `https://${domain}/login`;

  if (window.location.pathname.startsWith("/login")) return; // ✅ Evita redireccionar si ya estamos en login

  if (redirect === true) redirect = window.location.href;

  const url = redirect ? `${loginUrl}?redirect=${redirect}` : loginUrl;
  window.location.href = url;
};
