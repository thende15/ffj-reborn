import { Component } from '@angular/core';
import { MemberList } from './member-list/member-list';

@Component({
  selector: 'app-members',
  imports: [MemberList],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {}
