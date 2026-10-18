import { Component, input, OnInit } from '@angular/core';
import { IBoard } from '../../interfaces/icategories';

@Component({
  selector: 'app-board-list',
  imports: [],
  templateUrl: './board-list.html',
  styleUrl: './board-list.css',
})
export class BoardList implements OnInit {
  board = input<IBoard>()

  ngOnInit(): void {
  }

}
