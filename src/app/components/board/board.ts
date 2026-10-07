import { Component } from '@angular/core';
import { ThreadList } from '../thread-list/thread-list';

@Component({
  selector: 'app-board',
  imports: [ThreadList],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {}
