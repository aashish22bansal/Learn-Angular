import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  /** Inside the @Input(), we mention the alias name, so the variable name "element" can no longer be used and to access this element, "srvElement" has to be used. */

  constructor(){
    this.element = {
      type: "",
      name: "",
      content: ""
    }
  }

  ngOnInit(): void {
      
  }
}
