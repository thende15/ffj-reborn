import { Injectable, signal } from '@angular/core';
import { IBoard } from '../interfaces/icategories';
import { BoardConfig } from '../components/board-list/board-list';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  board = signal<BoardConfig> 

  storeBoard(board: any) {
    this.board = board;
  }
}
