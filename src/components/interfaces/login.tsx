export interface Login {
    isAuthenticated: boolean;
    user: User;
    token: null | string;
}

export interface User {
    uuid?: string;
    about_me?: null;
    email?: string;
    full_name?: null | string;
    is_new_avatar?: boolean
    nick_name?: null | string;
    profile_url?: string;
    social_id?: string;
    created_at?: null | string;
    updated_at?: null | string;
}

export interface Google {
    token: string;
    refreshToken: any;
    expiresIn: number;
    id: string;
    nickname: any;
    name: string;
    email: string;
    avatar: string;
    user: GoogleUser;
    avatar_original: string;
}

export interface GoogleUser {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
    id: string;
    verified_email: boolean;
    link: any;
}

export class GoogleModel implements Google {
    token: string  = '';
    refreshToken: any;
    expiresIn: number = 0;
    id: string = '';
    nickname: any;
    name: string = '';
    email: string = '';
    avatar: string = '';
    user: any = {};
    avatar_original: string = '';
}

export class UserModel implements User {
    about_me: any;
    nick_name: any;
    full_name: any;
    profile_url: any;
    is_new_avatar: boolean = false;
}
