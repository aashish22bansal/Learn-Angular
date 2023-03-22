import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /** We can write the HTML Code with the template file as: */
  // template: '
  //   <app-server>  WRITE HTML CODE WITHIN THIS SPACE.  </app-server>
  //   <app-server>  WRITE HTML CODE WITHIN THIS SPACE.  </app-server>
  // ',
  /** We can write the HTML Code within this Space if the code happens to be either simple or short otherwise it is advisable that the code should be written in an external file and the file must be mapped to this location. In allows Inlining the Templates. We can omit a Selector but we cannot omit a Template. */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
