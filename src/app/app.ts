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
import { IProfile } from './interfaces/iuser';


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
  authService = inject(Auth)
  //keep this, but have an update fuction as we'll be using that a lot
  token = signal<string | null>(localStorage.getItem('jwt') || null) 
  profileStorage = localStorage.getItem("profile")
  profile = signal<IProfile | null>(this.profileStorage ? JSON.parse(this.profileStorage) : null)
  mode = ModalMode

  navigation = [
    {routeName: "Home", routeLink: ""},
    {routeName: "Search", routeLink: "search"},
    {routeName: "Members", routeLink: "members"},
    {routeName: "Profile", routeLink: "profile"}
  ];
  categories: ICategories[] = []

  ngOnInit(): void {
    this.updateToken()
    console.log(typeof(this.profile()))
  }

  openModal(title: string, description: string, mode: number) {
    this.modalService.open({
      title: title,
      description: description,
      mode: mode
    })
  }
  
  updateToken() {
    this.token.update((token) => localStorage.getItem('jwt') || null)
  }

  login() {

  }

  logout() {
    this.authService.logout()
    this.updateToken()
  }


}
