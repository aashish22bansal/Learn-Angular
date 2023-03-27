import { Component, ContentChild, ViewChild, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef } from '@angular/core';

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

  @ViewChild('heading', {static: true}) header: ElementRef = {} as ElementRef; 
  // To prevent ElementRef from throwing any error, we can initialize it as above.

  // The @ContentChild() allows us to pass a selector, so the Reference Name contentParagraph would be selected. Then, we can store
  // some Property in it of type ElementRef. We can use this but just like the ViewRef, we can't access the value or anything before
  // we reached contentInit(). So, we add it to get access to content which is stored in another component, but then passed on via
  // ngContent(). We will log this in ngOnInit().
  @ContentChild('contentParagraph') paragraph: ElementRef = {} as ElementRef ;

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
    console.log('Text Content: '+this.header.nativeElement.textContent);
    console.log('Text content of paragraphContent: '+this.paragraph.nativeElement.textContent); // Present in ngAfterContentInit() as well
    // Here it will be empty
  }

  ngDoCheck(){
    console.log('ngDoCheck called!'); // called whenever Angular checks for changes.
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!'); // called after DoCheck() and called only once because does not get initialised again
    console.log('Text content of paragraphContent: '+this.paragraph.nativeElement.textContent); // Here, it will give us the data.
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!'); // called after DoCheck() because it called after each Change Detection Cycle.
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!'); // It is called after the content has been checked
    console.log('Text Content: '+this.header.nativeElement.textContent); // Here, we have the access to the Template Elements.
    // We could not check the values before it hadn't been rendered yet.
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
    // Refer the "Destroy first Component" button
  }
}
