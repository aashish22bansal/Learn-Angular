import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    
    }

    ngOnInit(): void {
        /**
         * So, we will use renderer to type Renderer2 to access the Elements. Renderer2 provides several helper methods to work with
         * the DOM. For example, we want to set the style of some Element, then we can do that using the setStyle() method. Now, the
         * problem with this is that, we need to have the element for which we want to set the style. For this, we can simply Inject
         * the Element Reference (using ElementRef) which will allow us to access the nativeElement.
         */
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
        // this.renderer.setStlye(ELEMENT_REFERENCE, ATTRIBUTE_TO_STYLE, VALUE_ASSIGNED_TO_THE_ATTRIBUTE<, OPTIONAL_FLAGS>);

        /**
         * This Approach is BETTER because Angular is not limited to running in the browser as it also works with Service Workers.
         * These are the environments where we might not have access to the DOM. So, if you try to change the DOM as we did in 
         * BasicHighlight by directly accessing the native element and the style of the element, then we might get an error in some
         * circumstances.
         */
    }

}
