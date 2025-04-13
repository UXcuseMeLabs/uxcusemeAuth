import { Session } from "./utils/sessionStorage";
import { User } from "./utils/userapi";
export declare const useSession: () => {
    session: Session | undefined;
    user: User | null;
    loading: boolean;
    onLogout: () => void;
};
