import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  /** Inside the @Input(), we mention the alias name, so the variable name "element" can no longer be used and to access this element, "srvElement" has to be used. */
  @Input() name: string;

  constructor(){
    console.log('constructor called!');
    this.element = {
      type: "",
      name: "",
      content: ""
    }

    this.name = '';
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes); 
    // SimpleChanges will provide an object, which has "element", which is of type SimpleChange and "element" is out bound Property
    // from the constructor().
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    
  }

  ngDoCheck(){
    console.log('ngDoCheck called!'); // called whenever Angular checks for changes.
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!'); // called after DoCheck() and called only once because does not get initialised again
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!'); // called after DoCheck() because it called after each Change Detection Cycle.
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!'); // It is called after the content has been checked
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
    // Refer the "Destroy first Component" button
  }
}
