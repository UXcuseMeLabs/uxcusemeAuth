import axios from "axios";

interface Provider {
    id: string;
    name: string;
  }
  
  // Interface para el Account
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
  
  // Interface para el Role
  interface Role {
    id: string;
    name: string;
  }
  
  // Interface para el PlatformConfig
  interface PlatformConfig {
    id: string;
    authorization: boolean;
    role: Role;
  }
  
  // Interface para el User
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
  
  // Interface para Vote
  interface Vote {
    id: string;
    value: boolean;
    user: User;  // Asumiendo que `User` ya está definido
    user_id: string;
    comment: InterComment;  // Asumiendo que `InterComment` ya está definido
    comment_id: string;
  }
  
  // Interface para InterComment
  interface InterComment {
    id: string;
    comment: string;
    user_id: string;
    username: string;
    votes: Vote;  // Referencia a `Vote` ya definida
    createdAt: Date;
  }
  
  // Interface para Game
  interface Game {
    id: string;
    name: string;
  }
  
  // Interface para GameParameter
  interface GameParameter {
    id: string;
    value: number;
    name: string;
    game_id: string;
    user_id: string;
    game: Game;  // Referencia a `Game` ya definida
  }
  

  export const getByToken = async (token: string): Promise<User | null> => {
    if (!token) return new Promise((resolve) => resolve(null));
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/user', {
      headers: { Authorization: `Bearer ${token}` },
      
    });
    return res.data;
  };