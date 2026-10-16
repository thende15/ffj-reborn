import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Categories } from '../../services/categories';
import { ICategories, IBoard } from '../../interfaces/icategories';
import { BoardList } from '../board-list/board-list';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [BoardList],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home implements OnInit, OnDestroy {
  catService = inject(Categories)
  categories = signal<ICategories[]>([])
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.catService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data) => {
          Object.values(data).forEach((cat: ICategories) => {
            let childBoards = cat.board_list.filter((board) => board.parent_id)
            for(let board of cat.board_list){
              for(let child of childBoards) {
                if(child.parent_id === board.board_id){
                  board.sub_board.push(child)
                }
              }
            }
            cat.board_list = cat.board_list.filter((board) => !board.parent_id)
            this.categories.update(el => [...el, cat])
          });
        }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}

