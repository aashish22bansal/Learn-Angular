import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding-directives-enhancing-ng-if-with-else-condition',
  templateUrl: './understanding-directives-enhancing-ng-if-with-else-condition.component.html',
  styleUrls: ['./understanding-directives-enhancing-ng-if-with-else-condition.component.css']
})
export class UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent implements OnInit {
  allowNewServer = false; // This button could be toggled through the HTML File using the "disabled" attribute.
  ServerCreationStatus = 'No Server was created!'; // This property could also be displayed as output using String Interpolation.
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout((/** Method Parameters */) => {/** Method Body */
      this.allowNewServer = true;
    } ,2000 /** Time in milliseconds */)
  }

  ngOnInit(){}

  onCreateServer(){
    this.serverCreated = true;
    this.ServerCreationStatus = 'Server was Created!';
  }

  onUpdateServerName(event: Event){
    // Logging the event to the Console.
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
