export interface ICategories {
    category_id: number;
    name: string;
    position: number;
    board_list: IBoard[];
}

//Includes all boards, main and sub
export interface IBoard {
    board_id: number;
    category_id: number; //Need to determine category structure to slot this in.
    parent_id: number | null;  //NULL = top level of its category
    name: string;
    slug: string; //Not sure exactly what this is, almost like a css selector
    description: string;
    threads: number | null;  // as displayed by the forum Note: will need to update this number at a later date
    posts: number | null; // Note: will need to update this number at a later date
    position: number; //Index essentially
    updated_at: string; //Date Object
    sub_board: IBoard[];
}
