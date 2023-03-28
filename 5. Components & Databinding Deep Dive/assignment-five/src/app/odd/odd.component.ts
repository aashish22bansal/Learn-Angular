import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number: number;
  // Since this value will be passed from outside, so we will add @Input() Property to it. With this, we will be able to pass the data
  // from outside into this component. So, to set the number, we will add the component in the game-control.component.
}
