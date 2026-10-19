import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ModalService } from '../../services/modal-service';
import { Auth } from '../../services/auth';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';


export class ModalConfig {
  title?: string = '';
  description?: string = '';
  save?: Function = () => {};
  discard?: Function = () => {};

  constructor(
    title: string = '',
    description: string = '',
    save = null,
    discard = null
  ) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (save) this.save = save;
    if (discard) this.discard = discard;
  }
}

@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})

export class Modal implements OnInit {
  modalService = inject(ModalService)
  authService = inject(Auth);
  fb = inject(FormBuilder)
  // registerForm = new FormGroup({
  //   email: new FormControl(''), 
  //   password: new FormControl('')
  // })
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  email = '';
  password = '';
  dialog = document.getElementById("dialog-box")
  dialogHead = document.getElementById("dialog-header")

  get open() {
    console.log("checking to see if open property is called")
    return this.modalService.isOpen;
  }

  get config() {
    return this.modalService.config;
  }

  discardWrapper(event: Event) {
    this.modalService.isOpen = false;
    if(this.config.discard) {
      this.config.discard(event)
    }
  }

  saveWrapper(event: Event) {
    this.modalService.isOpen = false;
    if (this.config.save) {
      this.config.save(event)
    }
  }

  ngOnInit(): void {
    //TODO: Make this work in some way. dragEvent() is a little cleaner imo, but if it doesn't work then what's the point?
    // this.modalService.isOpen ? this.dragEvent() : null
    // if(this.modalService.isOpen) {
    //     let isDragging = false;
    //     let offsetX = 0;
    //     let offsetY = 0;
    //     this.dialogHead!.addEventListener("mousedown", (e) => {
    //       console.log("is this firing?", e)
    //       isDragging = true
    //       const rect = this.dialog!.getBoundingClientRect();
    //       this.dialog!.style.position = "absolute";
    //       this.dialog!.style.left = `${rect.left}px`;
    //       this.dialog!.style.top = `${rect.top}px`;
    //       this.dialog!.style.margin = "0";
    //       offsetX = e.clientX - rect.left
    //       offsetY = e.clientY - rect.top
    //     })

    //     document.addEventListener("mousemove", (e) => {
    //       if (!isDragging) return

    //       let newX = e.clientX - offsetX
    //       let newY = e.clientY - offsetY

    //       this.dialog!.style.left = `${newX}px`
    //       this.dialog!.style.top = `${newY}px`
    //     })

    //     document.addEventListener("mouseup", (e) => {
    //       isDragging = false;
    //     })
    //   }
  }

    //Absolutely not. TODO: make a proper form
  onSubmit() {
    if(this.registerForm.valid) {
      // if(this.registerForm.email === "regForm") {
      //     this.authService.register(this.email, this.password).subscribe(
      //     data => {console.log(data)}
      //   );
      // } else {
      //   this.authService.login(this.email, this.password).subscribe(
      //   data => {console.log(data)}
      //   // {next:(res) => {
      //   //   this.authService.saveToken(res.token)
      //   // },
      //   // error: (err) => {
      //   //   console.error(err)
      //   // }}
      // );
      // }
      
    }
  }

  //Alright, let's do it like this: 
  //Step 1: grab the bare basics. email, password. that's all I want for the main account, and backend wise we'll assign a unique id
  //Step 2: have a separate section that will create the first profile. profile will need the following: 
  //name, handle(add the '@' upon creation; in fact, have it set up in the field), avatar(optional)
  //create these by default, populate some with hardcoded values: notifications, created_on, last_seen, group_id, profile_id, logged_in, global_id(tied to email)
  //we can add a lot more through the profile page, and make some of those values editable. I think more fields should be available based on the miniprofile (like the 250x350 image)

  dragEvent() {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    this.dialogHead!.addEventListener("mousedown", (e) => {
      isDragging = true
      const rect = this.dialog!.getBoundingClientRect();
      this.dialog!.style.position = "absolute";
      this.dialog!.style.left = `${rect.left}px`;
      this.dialog!.style.top = `${rect.top}px`;
      this.dialog!.style.margin = "0";
      offsetX = e.clientX - rect.left
      offsetY = e.clientY - rect.top
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return

      let newX = e.clientX - offsetX
      let newY = e.clientY - offsetY

      this.dialog!.style.left = `${newX}px`
      this.dialog!.style.top = `${newY}px`
    })

    document.addEventListener("mouseup", (e) => {
      isDragging = false;
    })

    console.log("seeing if this is a constant thing or a one time thing")
  }
  
}
