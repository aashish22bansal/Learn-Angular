import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor(){}

  ngOnInit() {}

  onStartGame(){
    // Here, we will first set the interval which we will store in a Property which we will later access and clear.
    this.interval = setInterval(() => {
      // In this event, we will just be incrementing the number.
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
      // Now, we need to make this listenable from outside. This can be done by adding @Output() for the intervalFired Property
      // using which this event could be called from outside this component.
      // Further, we will listen to this event on the <app-game-control> in app.component.html file.
    } ,1000); 
    // This is a method supported by Native JavaScript. Here, we will emit an event every 1000 milliseconds. We will also use
    // an ES6 Arrow Function which will be executed every second. This function will not take any arguments but it will emit
    // an event. This event needs to be created (for which we will use the intervalFired Property of type EventEmitter which will
    // hold a number as a value).
  }

  onPauseGame(){
    // Here, we will simply implement clearInterval to which we will pass this interval which is the reference of the interval we
    // want to clear.
    clearInterval(this.interval);
  }
}
