import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent{
    collapsed = false;

    @Output() featureSelected = new EventEmitter<String>(); // This is a feature selected Event.

    onSelect(feature: string){
        // Now, we want to emit our own event, for which we will add a new Property called featureSelected which should be a new
        // EventEmitter. We will use this property to emit() an event value whenever we click on the buttons. It will emit() "feature"
        // which is provided the templates from the HTML template component. Now, to make this event listable to the parent class,
        // we will use the @Output() Component Decorator. Now, in the app-header.component.html file, we will listen to the 
        // featureSelected event and then we will execute onNavigate() method. Since we are interested in the data that we are 
        // receiving from featureSelected, so we can get access to that data using the $event to get access to any data that the 
        // event passes to us. Now, suppose we just want to pass some sort of custom data, then we can just pass 'other-data' and we
        // can use $event as a second argument.
        this.featureSelected.emit(feature);
    }
}