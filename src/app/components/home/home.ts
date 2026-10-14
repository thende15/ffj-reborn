import { Component, inject, OnInit, signal } from '@angular/core';
import { Categories } from '../../services/categories';
import { ICategories } from '../../interfaces/icategories';
import { BoardList } from '../board-list/board-list';

@Component({
  selector: 'app-home',
  imports: [BoardList],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home implements OnInit {
  catService = inject(Categories)
  categories = signal<ICategories[]>([])

  ngOnInit(): void {
    this.catService.getCategories().subscribe(
      (data) => {
        Object.values(data).forEach((cat: any) => {
          cat = {
            ...cat, 
            boards: []
          }
          this.categories.update(el => [...el, cat])
        });
        console.log(this.categories)
      }
    )
  }
}

