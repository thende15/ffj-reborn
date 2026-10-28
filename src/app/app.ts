import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';
import { Categories } from './services/categories';
import { ICategories } from './interfaces/icategories';
import { ModalService } from './services/modal-service';
import { Modal } from './common/modal/modal';
import { ModalMode } from './common/enums';
import { BoardService } from './services/board-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, Modal],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App implements OnInit {
  protected readonly title = signal('ffj-reborn');
  modalService = inject(ModalService)
  catService = inject(Categories)
  boardService = inject(BoardService)
  token = localStorage.getItem('token')
  mode = ModalMode

  navigation = [
    {routeName: "Home", routeLink: ""},
    {routeName: "Search", routeLink: "search"},
    {routeName: "Members", routeLink: "members"},
    {routeName: "Profile", routeLink: "profile"}
  ];
  categories: ICategories[] = []

  ngOnInit(): void {
    console.log('testing how this works: ', this.boardService.getBoard(3))
    this.boardService.getBoard(3).subscribe(data => {
      console.log('okay, smartass, what does the data look like?', data)
    })

  }

  openModal(title: string, description: string, mode: number) {
    this.modalService.open({
      title: title,
      description: description,
      mode: mode
    })
  }
  

  login() {

  }

  logout() {

  }


}
