import { IGroup } from "./igroups";

export interface IUser {
    //this is where actual account data will go. will include an array of profiles from below
    //TODO: remove nulls in future. need to indicate on modal component that we *will* be getting a string
    email: string | null;
    password: string | null;
    global_id: number;
    accout_creation: Date;
    profiles: IProfile[];
}

//TODO: add a property that has user settings
export interface IProfile {
    user_id: number;
    name: string | null; //fix null later
    handle: string | null; //fix null later
    group: IGroup;
    color: string | null;
    avatar: string | null;
    post_count: number | null;
    profile: string;       //JSON custom fields, latest seen
    exp: number;
    tokens: number;
    first_seen_at: Date; //Date 
    updated_at: Date;    //Date 
}