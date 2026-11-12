import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProfileHeader } from './components/profile/profile-header/profile-header';
import { Members } from './components/members/members';
import { ProfileSummary } from './components/profile/profile-summary/profile-summary';
import { Board } from './common/board/board';
import { CreateThread } from './components/create-thread/create-thread';

export const routes: Routes = [
    {path: '', component: Home},
    // {path: 'board/:id', component: BoardList},
    //TODO: add user id to profile; do this once we get data
    //Profile will also need child routes
    {path: 'profile', component: ProfileHeader, 
        children: [{path: '', component: ProfileSummary}]
    },
    //TODO: add search 
    {path: 'members', component: Members},
    {path: 'board/:id', component: Board},
    // {path: 'thread/:id', component: Board},
    // The id in new thread comes from the Board
    {path: 'thread/new/:id', component: CreateThread},
    {path: '**', component: Home}
];
