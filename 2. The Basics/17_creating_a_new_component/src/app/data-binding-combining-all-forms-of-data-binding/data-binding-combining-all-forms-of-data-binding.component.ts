import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-combining-all-forms-of-data-binding',
  templateUrl: './data-binding-combining-all-forms-of-data-binding.component.html',
  styleUrls: ['./data-binding-combining-all-forms-of-data-binding.component.css']
})
export class DataBindingCombiningAllFormsOfDataBindingComponent implements OnInit {
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
    this.ServerCreationStatus = 'Server was Created!\n The Name of the server is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    // Logging the event to the Console.
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
