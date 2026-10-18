import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';
import { Categories } from './services/categories';
import { ICategories } from './interfaces/icategories';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App implements OnInit {
  
  protected readonly title = signal('ffj-reborn');
  email = '';
  password = '';
  authService = inject(Auth);
  catService = inject(Categories)

  navigation = [
    {routeName: "Home", routeLink: ""},
    {routeName: "Search", routeLink: "search"},
    {routeName: "Members", routeLink: "members"},
    {routeName: "Profile", routeLink: "profile"}
  ];
  categories: ICategories[] = []

  ngOnInit(): void {
    // this.catService.getCategories().subscribe(
    //   (data) => {
    //     Object.values(data).forEach((cat: any) => {
    //       cat = {
    //         ...cat, 
    //         boards: []
    //       }
    //       this.categories.push(cat)
    //     });
    //     console.log(this.categories)
    //   }
    // )
  }
  

  login() {

  }

  logout() {

  }

  //Absolutely not. TODO: make a proper form
  onSubmit(form: NgForm) {
    if(form.valid) {
      if(form.name === "regForm") {
          this.authService.register(this.email, this.password).subscribe(
          data => {console.log(data)}
        );
      } else {
        this.authService.login(this.email, this.password).subscribe(
        data => {console.log(data)}
        // {next:(res) => {
        //   this.authService.saveToken(res.token)
        // },
        // error: (err) => {
        //   console.error(err)
        // }}
      );
      }
      
    }
  }

  //Alright, let's do it like this: 
  //Step 1: grab the bare basics. email, password. that's all I want for the main account, and backend wise we'll assign a unique id
  //Step 2: have a separate section that will create the first profile. profile will need the following: 
  //name, handle(add the '@' upon creation; in fact, have it set up in the field), avatar(optional)
  //create these by default, populate some with hardcoded values: notifications, created_on, last_seen, group_id, profile_id, logged_in, global_id(tied to email)
  //we can add a lot more through the profile page, and make some of those values editable. I think more fields should be available based on the miniprofile (like the 250x350 image)
}
