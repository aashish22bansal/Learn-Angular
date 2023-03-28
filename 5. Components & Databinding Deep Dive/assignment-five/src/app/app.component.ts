import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-five';
  
  // So, we will create an empty arrays in the beginning.
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){
    // console.log(firedNumber); // This will be commented because now we know that the app is working.
    // With this, whenever we click the "Start Game" button, we will be able to see the incrementing values in the console 
    // of the browser.

    if(firedNumber%2===0){
      this.evenNumbers.push(firedNumber);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
