import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home {
  categories = []; //interface will be ICatergories[], and a datatype within will be IBoardList[]
}
