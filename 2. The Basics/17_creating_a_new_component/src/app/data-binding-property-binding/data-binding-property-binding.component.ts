import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-property-binding',
  templateUrl: './data-binding-property-binding.component.html',
  styleUrls: ['./data-binding-property-binding.component.css']
})
export class DataBindingPropertyBindingComponent implements OnInit {
  allowNewServer = false; // This button could be toggled through the HTML File using the "disabled" attribute.

  constructor() {
    setTimeout((/** Method Parameters */) => {/** Method Body */
      this.allowNewServer = true;
    } ,2000 /** Time in milliseconds */)
  }

  ngOnInit(){}
}
