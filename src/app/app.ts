import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('ffj-reborn');
  navigation = [
    {routeName: "Home", routeLink: ""},
    {routeName: "Search", routeLink: "search"},
    {routeName: "Members", routeLink: "members"},
    {routeName: "Profile", routeLink: "profile"}
  ];
}
