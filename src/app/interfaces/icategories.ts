export interface ICategories {}

interface IBoardList{}

//Includes all boards, main and sub
interface IBoard {
    board_id: number;
    category_id: number; //Need to determine category structure to slot this in.
    parent_id: number | null;  //NULL = top level of its category
    name: string;
    slug: string; //Not sure exactly what this is, almost like a css selector
    description: string;
    threads: number | null;  // as displayed by the forum
    posts: number | null;
    position: number; //Index essentially
    updated_at: string; //Date Object
}
