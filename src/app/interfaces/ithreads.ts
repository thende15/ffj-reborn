export interface IThreads {
    thread_id: number;
    board_id: number;
    title: string;
    slug: string;
    author_id: number | null;
    author_name: string | null;
    sticky: number;
    announcement: number;
    locked: number;
    replies: number | null;
    views: number | null;
    last_post_at: string | null;
    synced_replies: number | null;
    synced_last_post_at: string | null;
    synced_at: string | null;
    raw: string;
    updated_at: string;
    gone_at: string | null;
}
