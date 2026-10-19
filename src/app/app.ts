import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';
import { Categories } from './services/categories';
import { ICategories } from './interfaces/icategories';
import { ModalService } from './services/modal-service';
import { Modal } from './common/modal/modal';


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
  token = localStorage.getItem('token')

  navigation = [
    {routeName: "Home", routeLink: ""},
    {routeName: "Search", routeLink: "search"},
    {routeName: "Members", routeLink: "members"},
    {routeName: "Profile", routeLink: "profile"}
  ];
  categories: ICategories[] = []

  ngOnInit(): void {

  }

  openModal() {
    console.log('checking to see if button is working')
    console.log(this.modalService.isOpen)
    this.modalService.open({
      title: 'test',
      description: 'Description goes here'
    })
    console.log(this.modalService.isOpen)
  }
  

  login() {

  }

  logout() {

  }


}
