import { IProfile } from "./iuser";

export interface RegisterResponse {
    message: string;
    token?: string;
}

export interface LoginResponse {
    message: string;
    token?: string;
    profile?: IProfile;
}
