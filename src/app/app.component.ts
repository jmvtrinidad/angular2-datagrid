/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { NavigationComponent } from './navigation';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  directives: [ NavigationComponent ],
  template: `
    <navigation></navigation>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {

  constructor() {

  }
}
