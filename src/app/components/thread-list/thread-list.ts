import { Component, inject, input, OnInit, signal } from '@angular/core';
import { BoardService } from '../../services/board-service';
import { DatePipe } from '@angular/common';
import { IThreads } from '../../interfaces/ithreads';

@Component({
  selector: 'app-thread-list',
  imports: [DatePipe],
  templateUrl: './thread-list.html',
  styleUrl: './thread-list.css',
})
export class ThreadList implements OnInit {
  boardService = inject(BoardService)
  // public storage = inject(StorageService)
  threads = signal<IThreads[]>([])
  board = signal(JSON.parse(localStorage.getItem("board")!))

  ngOnInit(): void {
    // console.log(this.board());
    this.boardService.getBoard(this.board()?.board_id).subscribe((data) => {
      //TODO: set data to a signal and insert data into component
      // console.log('show me the data', data)
      Object.values(data).forEach((thread: IThreads) => {
        this.threads.update(el => [...el, thread])
      })
      console.log(this.threads())
    })
  }

}
