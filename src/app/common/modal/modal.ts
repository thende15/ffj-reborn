import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ModalService } from '../../services/modal-service';
import { Auth } from '../../services/auth';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IUser } from '../../interfaces/iuser';
import { ModalMode } from '../enums';


export class ModalConfig {
  title?: string = '';
  description?: string = '';
  save?: Function = () => {};
  discard?: Function = () => {};
  mode?: number = 10;

  constructor(
    title: string = '',
    description: string = '',
    save = null,
    discard = null,
    mode: number = 10
  ) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (save) this.save = save;
    if (discard) this.discard = discard;
    if (mode) this.mode = mode;
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
  mode = ModalMode
  fb = inject(FormBuilder)
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email
    ]],
    password: ['', Validators.required],
    userName: ['', Validators.required],
    handle: ['', Validators.required],
  })
  dialog = document.getElementById("dialog-box")
  dialogHead = document.getElementById("dialog-header")

  get open() {
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

  genId(): number {
    let num = Math.floor(Math.random() * 100000)
    return num < 100000 && num >= 10000 ? num : this.genId()
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
    switch(this.modalService.config.mode){
      case 0:
        if(this.registerForm.valid){
          console.log(this.registerForm.value)
          let payload: IUser = {
            email: this.registerForm.controls.email.value,
            password: this.registerForm.controls.password.value, 
            global_id: this.genId(),
            accout_creation: new Date(),
            profiles: [{
              user_id: 0, //Need to reassign this
              name: this.registerForm.controls.userName.value,
              handle: this.registerForm.controls.handle.value,
              group: {
                id: 0, 
                color: "",
                name: ""
              },
              color: null,
              avatar: null,
              post_count: null,
              profile: '{}',       //JSON custom fields, latest seen
              exp: 0,
              tokens: 0,
              first_seen_at: new Date(), //Date 
              updated_at: new Date()    //Date 
            }]
          }
        }
        break
      case 1:
        break
      case 2:
        break
      default: 
          console.log("Error has occurred")
    }
    // if(this.registerForm.valid) {
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
      
    // }
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
