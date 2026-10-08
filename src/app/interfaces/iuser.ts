export interface IUser {
    //this is where actual account data will go. will include an array of profiles from below
}

export interface IProfile {
    user_id: number;
    name: string;
    handle: string;
    group_id: number;
    color: string | null;
    avatar: string | null;
    post_count: number | null;
    profile: string;       //JSON custom fields, latest seen
    first_seen_at: string; //Date 
    updated_at: string;    //Date 
}