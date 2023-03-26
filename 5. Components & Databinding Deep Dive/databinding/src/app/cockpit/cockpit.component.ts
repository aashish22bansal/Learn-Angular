import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

// Method 1
// export class CockpitComponent implements OnInit {
//   @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
//   @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
//   /** @Output() is used to emit an event outside the component. */

//   // newServerName: string = '';
//   newServerContent: string = '';

//   constructor(){}

//   ngOnInit(): void {
      
//   }

//   onAddServer(nameInput: HTMLInputElement) {
//     console.log(nameInput); // This is the Local Reference value being passed from the template.
//     /** In the log entry, we will be able to see that we are receiving the input element itself, in this case,
//      *         <input _ngcontent-onk-1 class="form-control" type="text">
//      *  So, we have received an element with all its properties.
//      *  From this, we could also check the value of its input as well as:
//      */
//     console.log(nameInput.value);

//     this.serverCreated.emit({
//       serverName: nameInput.value,
//       serverContent: this.newServerContent
//     });
//     // this.serverElements.push({
//     //   type: 'server',
//     //   name: this.newServerName,
//     //   content: this.newServerContent
//     // });
//   }
  
//   onAddBlueprint(serverContentInput: HTMLInputElement) {
//     this.blueprintCreated.emit({
//       serverName: serverContentInput.value, 
//       serverContent: this.newServerContent
//     });
//     // this.serverElements.push({
//     //   type: 'blueprint',
//     //   name: this.newServerName,
//     //   content: this.newServerContent
//     // });
//   }
  
// }


// Method 2
// export class CockpitComponent implements OnInit {
//   @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
//   @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
//   // @Output() is used to emit an event outside the component. 

//   // newServerName: string = '';
//   // newServerContent: string = '';
//   @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
//   // The serverContentInput is just a property, so we will add the @ViewChild() Decorator to it.
//   // For the @ViewChild() will not work like this. So, for this to work, we will have to pass the selector of the element (how we
//   // want to select the element). In this case, we will pass the serverContentInput from the HTML Template to this as it refers to
//   // the particular element. Now, if we do not want to pass the selector of the element, then we can pass the type of that Component.
//   // In this case, we will pass the CockpitComponent, as a string, to get access to the first occurence of this cockpit component in
//   // the app component.

//   constructor(){}

//   ngOnInit(): void {
      
//   }

//   onAddServer(nameInput: HTMLInputElement) {
//     console.log(this.serverContentInput);

//     this.serverCreated.emit({
//       serverName: nameInput.value,
//       serverContent: this.serverContentInput.nativeElement.value
//     });
//   }
  
//   onAddBlueprint(serverContentInput: HTMLInputElement) {
//     this.blueprintCreated.emit({
//       serverName: serverContentInput.value, 
//       serverContent: this.serverContentInput.nativeElement.value
//     });
//   }
  
// }


// Method 3
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