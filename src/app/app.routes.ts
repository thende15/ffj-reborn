import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProfileHeader } from './components/profile/profile-header/profile-header';
import { BoardList } from './components/board-list/board-list';
import { Members } from './components/members/members';
import { ProfileSummary } from './components/profile/profile-summary/profile-summary';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'board/:id', component: BoardList},
    //TODO: add user id to profile; do this once we get data
    //Profile will also need child routes
    {path: 'profile', component: ProfileHeader, 
        children: [{path: '', component: ProfileSummary}]
    },
    //TODO: add search 
    {path: 'members', component: Members},
    {path: '**', component: Home}
];
