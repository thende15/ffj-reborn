import { Component } from '@angular/core';
import { PostList } from '../post-list/post-list';
import { QuickReply } from '../quick-reply/quick-reply';

@Component({
  selector: 'app-thread',
  imports: [PostList, QuickReply],
  templateUrl: './thread.html',
  styleUrl: './thread.css',
})
export class Thread {}
