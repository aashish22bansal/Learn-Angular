import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'databinding';
  // type: string = '';
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  newServerName: string = '';
  newServerContent: string = '';

  
}
