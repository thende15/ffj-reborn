export interface IPosts {
    post_id: number;
    thread_id: number;
    board_id: number | null; 
    page: number; 
    author_id: number; 
    author_name: string;
    created_at: string;
    edited_at: string | null; 
    content_html: string; 
    content_text: string;            //own words, quotes removed
    words: number;
    signature: string | null;
    hash: string;
    raw: string; 
    updated_at: string;
    gone_at: string | null;
}
