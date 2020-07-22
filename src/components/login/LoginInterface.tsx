export interface Login {
    loading: boolean;
    error: any;
    user: User;
    google: Google;
}

export interface User {
    about_me: string;
    nick_name: string;
    full_name: string;
    profile_url: string;
    is_new_avatar: boolean;
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
    user?: GoogleUser;
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
    user?: GoogleUser;
    avatar_original: string = '';
}

export class UserModel implements User {
    about_me: any;
    nick_name: any;
    full_name: any;
    profile_url: any;
    is_new_avatar: boolean = false;

}
