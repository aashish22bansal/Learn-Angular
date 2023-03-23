import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-event-binding',
  templateUrl: './data-binding-event-binding.component.html',
  styleUrls: ['./data-binding-event-binding.component.css']
})
export class DataBindingEventBindingComponent implements OnInit {
  allowNewServer = false; // This button could be toggled through the HTML File using the "disabled" attribute.
  ServerCreationStatus = 'No Server was created!'; // This property could also be displayed as output using String Interpolation.

  constructor() {
    setTimeout((/** Method Parameters */) => {/** Method Body */
      this.allowNewServer = true;
    } ,2000 /** Time in milliseconds */)
  }

  ngOnInit(){}

  onCreateServer(){
    this.ServerCreationStatus = 'Server was Created!';
  }
}
