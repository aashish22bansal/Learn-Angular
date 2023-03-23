import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-string-interpolation',
  templateUrl: './data-binding-string-interpolation.component.html',
  styleUrls: ['./data-binding-string-interpolation.component.css']
})
export class DataBindingStringInterpolationComponent {
  serverId: number = 10;
  serverStatus: string = "offline";
  /** To fetch this data, we can use Data Binding. */

  getServerStatus(){
    return this.serverStatus;
  }
  /** This method can be called in the same way we use String Interpolation. */
}
