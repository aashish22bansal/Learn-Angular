import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-two-way-binding',
  templateUrl: './data-binding-two-way-binding.component.html',
  styleUrls: ['./data-binding-two-way-binding.component.css']
})
export class DataBindingTwoWayBindingComponent {
  allowNewServer = false; // This button could be toggled through the HTML File using the "disabled" attribute.
  ServerCreationStatus = 'No Server was created!'; // This property could also be displayed as output using String Interpolation.
  serverName = 'TestServer';

  constructor() {
    setTimeout((/** Method Parameters */) => {/** Method Body */
      this.allowNewServer = true;
    } ,2000 /** Time in milliseconds */)
  }

  ngOnInit(){}

  onCreateServer(){
    this.ServerCreationStatus = 'Server was Created!';
  }

  onUpdateServerName(event: Event){
    // Logging the event to the Console.
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
