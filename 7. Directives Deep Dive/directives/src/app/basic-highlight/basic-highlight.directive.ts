import { Directive, OnInit, ElementRef } from '@angular/core';


@Directive({
    /**
     * We will have to pass an Object to this Directive to configure this directive.
     * 
     * The one thing which a Directive absolutely needs is a Selector because we do place Directives in our template  to attach them
     * to elements, so we need to have some way to give angular those instructions, which could be done with the help of the Selector.
     * Here,  this should also be a unique selector. Using Camel Case appBasicHighlight will select it by Element but we need to have 
     * it Attribute-style, so we will wrap this in Square Brackets, which means this will be recognised whenever we add appBasicHightlight
     * without Square Brackets to an Element.
     */
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    /** 
     * Changing the Background Color of the Element where we attach this Directive. For this, we need to get access to the Element
     * the Directive sits on by Injecting the Element the Directive sits on into this Directive. We can inject by adding a constructor()
     * and within the parameter, we will mention the list of Elements which we want to get whenever an instance of the Class is created.
     * Here, we need to pass the Reference of the Element the Directive was placed on. The Data Type of this reference must be ElementRef.
     * To this, we can add an Access Modifier which will make this a Property of this class.
     */ 
    constructor(private elementRef: ElementRef){}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'pink'; // Here, we are just getting the access of the element and then
                                                                      // overwriting the style of that element. To use this Directive,
                                                                      // we will have to inform Angular of this new Directive by adding
                                                                      // this to the AppModule in the Declarations.
        /**
         * We know that accessing elements like this is not a good practice because Angular is also able to Render the templates without
         * a DOM and then these Properties might not be available. It could do this when using Service Workers. So, instead of this, we
         * will use a Renderer to access these Elements (as discussed in BetterHighlightDirective).
         */
    }
}