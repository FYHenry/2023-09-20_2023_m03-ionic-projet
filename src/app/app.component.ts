import { Component } from '@angular/core';
import { pages } from './shared/pages';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public readonly appPages = pages;
  
  constructor() {}
}
