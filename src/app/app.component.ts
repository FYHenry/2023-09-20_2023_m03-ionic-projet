import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conférence', url: '/folder/conference', icon: 'clipboard' },
    { title: 'Session', url: '/folder/session', icon: 'list' },
    { title: 'Présentateur', url: '/folder/presentateur', icon: 'person' }
  ];
  constructor() {}
}
