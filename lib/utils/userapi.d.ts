interface Provider {
    id: string;
    name: string;
}
interface Account {
    id: string;
    accountId: string;
    provider: Provider;
    providerId: string;
    userId: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpiresAt?: string;
    refreshTokenExpiresAt?: string;
    scope?: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}
interface Role {
    id: string;
    name: string;
}
interface PlatformConfig {
    id: string;
    authorization: boolean;
    role: Role;
}
export interface User {
    id: string;
    display_name: string;
    email: string;
    email_verified: boolean;
    image: string;
    gameParameters: GameParameter[];
    birthday: Birthday;
    votes: Vote[];
    accounts: Account[];
    platformConfigInterComment: PlatformConfig;
    platformConfigHome: PlatformConfig;
}
interface Birthday {
    id: string;
    day: number;
    month: number;
    user_id: string;
    username: string;
}
interface Vote {
    id: string;
    value: boolean;
    user: User;
    user_id: string;
    comment: InterComment;
    comment_id: string;
}
interface InterComment {
    id: string;
    comment: string;
    user_id: string;
    username: string;
    votes: Vote;
    createdAt: Date;
}
interface Game {
    id: string;
    name: string;
}
interface GameParameter {
    id: string;
    value: number;
    name: string;
    game_id: string;
    user_id: string;
    game: Game;
}
export declare const getByToken: (token: string) => Promise<User | null>;
export {};
