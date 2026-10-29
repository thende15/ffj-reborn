import { Component, inject, OnInit, signal } from '@angular/core';
import { ThreadList } from '../../components/thread-list/thread-list';
import { BoardService } from '../../services/board-service';
import { StorageService } from '../../services/storage-service';
import { UpperCasePipe } from '@angular/common';
import { BoardList } from '../../components/board-list/board-list';

@Component({
  selector: 'app-board',
  imports: [ThreadList, UpperCasePipe, BoardList],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board implements OnInit {
  boardService = inject(BoardService)
  // public storage = inject(StorageService)
  //TODO: make interface for threads
  threads = signal<any>([])
  board = signal(JSON.parse(localStorage.getItem("board")!))

  //TODO: make a service to house data temporarily and share it with this component. We'll need the base board information, which we can then use to get our threads.
  //TODO: make an if block where if there is no data use the route to make a call in order to grab data for this specific board. use some logic in categories to insert subboards
  ngOnInit(): void {
    // console.log('are you a string?', this.board(), typeof(this.board()))
    // JSON.parse(localStorage.getItem("board")!)
    this.boardService.getBoard(this.board()?.board_id).subscribe((data) => {
      //TODO: set data to a signal and insert data into component
      // console.log('show me the data', data)
      Object.values(data).forEach((thread: any) => {
        this.threads.update(el => [...el, thread])
      })
      
    })
  }
  

}
