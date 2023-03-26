import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  /** @Output() is used to emit an event outside the component. */

  // newServerName: string = '';
  newServerContent: string = '';

  constructor(){}

  ngOnInit(): void {
      
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput); // This is the Local Reference value being passed from the template.
    /** In the log entry, we will be able to see that we are receiving the input element itself, in this case,
     *         <input _ngcontent-onk-1 class="form-control" type="text">
     *  So, we have received an element with all its properties.
     *  From this, we could also check the value of its input as well as:
     */
    console.log(nameInput.value);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
  
  onAddBlueprint(serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverContentInput.value, 
      serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
  
}

