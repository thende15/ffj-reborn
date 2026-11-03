import { Component, inject, input, OnInit } from '@angular/core';
import { IBoard } from '../../interfaces/icategories';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage-service';

export class BoardConfig {
  board_id?: number;
  category_id?: number; //Need to determine category structure to slot this in.
  parent_id?: number | null;  //NULL = top level of its category
  name?: string;
  slug?: string; //Not sure exactly what this is, almost like a css selector
  description?: string;
  threads?: number | null;  // as displayed by the forum Note: will need to update this number at a later date
  posts?: number | null; // Note: will need to update this number at a later date
  position?: number; //Index essentially
  updated_at?: string; //Date Object
  sub_board?: IBoard[];

  constructor(
    board_id: number = 0,
    category_id: number = 0,
    parent_id: number | null = 0,
    name: string = '',
    slug: string = '',
    description: string = '',
    threads: number | null = 0,
    posts: number | null = 0,
    position: number = 0,
    updated_at: string = '',
    sub_board: IBoard[] = []
  ) {
    if(board_id) this.board_id = board_id
    if(category_id) this.category_id = category_id
    if(parent_id) this.parent_id = parent_id
    if(name) this.name = name
    if(slug) this.slug = slug
    if(description) this.description = description
    if(threads) this.threads = threads
    if(posts) this.posts = posts
    if(position) this.position = position
    if(updated_at) this.updated_at = updated_at
    if(sub_board) this.sub_board = sub_board
  }
}

@Component({
  selector: 'app-board-list',
  imports: [RouterLink],
  templateUrl: './board-list.html',
  styleUrl: './board-list.css',
})
export class BoardList implements OnInit {
  private router = inject(Router)
  public storage = inject(StorageService)
  board = input<IBoard>()

  ngOnInit(): void {
  }

  storeBoard() {
    localStorage.setItem("board", JSON.stringify(this.board()))
    // this.storage.storeBoard(this.board())
  }

  route() {
    this.storeBoard()
    this.router.navigate(['/board', this.board()?.board_id])
  }

}
