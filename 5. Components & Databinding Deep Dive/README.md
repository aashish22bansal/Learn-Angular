<h1>Components & Databinding Deep Dive</h1>
<div>
    <h2>Property & Event Binding</h2>
    <p>We should be able to send data into a component or receive data/event. Angular provides us with tools to implement this flow. We can use Property & Event Binding not only on HTML Elements and their native properties and events but we can also use them on Directives (for example, with ngClass and ngStyle) and Components and bind them to our own Custom Properties and Events. So, we can emit our own events.</p>
</div>
<div>
    <h2>Custom Property & Event Binding</h2>
    <p>Component Communication is very important and a key feature and with @Input(), it will make the Properties bindable from outside using the parent component using the sub-component and the same for the same for @Output() which allows the parent components using the sub-component to to listen to your own events which are created with the help of the EventEmitter. This feature allows us to make our application very dynamic by allowing us to create a lot of components and letting them talk to each other.</p>
    <p>Now, one issue with this component is that if we want two components at the same level to talk to each other, then we will have to pass the event to the parent component and then to the child component. This can make the chain of communication very complicated.</p>
</div>
<div>
    <h2>Angular Style Encapsulation</h2>
    <p>According to this, Angular simply gives the same attribute to all elements in a componenet. It does this for each component with different unique attribute names and with that it can make sure that once it changed your style selector, then it automatically adds this attribute selector to all your styles defined for a component, that these styles get only applied to elements of that component. It kind of emulates the shadow DOM (which is a technology not supported by all the browsers where each elements has its kind of own shadow DOM behind it where you could then assign styles to each element).</p>
    <p>We cannot overwrite this code but we can add the <code>encapsulation</code> Property to the <code>@Component()</code> in the TypeScript file where we can assign <code>ViewEncapsulation</code> (which will be imported from the <code>@angular/core</code>) and then choose between three modes:
    <ol>
        <li>Emulated: This is the default mode. This will use View Encapsulation and we will be able to see the names of the attributes in the elements, but now if we were to define any styles for this component in the CSS File, then they will be applied globally.</li>
        <li>Native: This uses the ShadowDom Technology which should give us the same result as before with emulated but only in browsers which support it.</li>
        <li>None: With this, we can see that the strange attribute names will not be added to the elements. Therefore, this component does not use View Encapsulation.</li>
    </ol>
    </p>
</div>
<div>
    <h2>Understanding the Component Lifecycle</h2>
    <p>ngOnInit() is a Lifecycle Hook. If a new Component is created in Angular, and of course Angular is responsible for creating
    these components, when it finds one of our selectors, for example, it will instantiate a new version of that component and add
    it into the DOM. So, once a new Component is instantiated, Angular goes through a couple of phases in this creation process and
    it gives us a chance to hook into these phases and execute some code. We can hook into these phases by implementing some methods, 
    Angular will call if they are present. The phases are:
    <ul>
        <li><b>ngOnChanges</b>: This is the first hook we can hook into. This may actually be executed multiple times. It's executed
        right at the start, when a new component is created but, thereafter it is also called whenever one of the our bound input
        properties change (which means properties decorated with @input), so whenever these properties receive new values.</li>
        <li><b>ngOnInit</b>: This is the second hook. This method gets executed once the component has been initialised. This does
        not mean that we can see it because it has not been added to the DOM yet, so it has not been displayed yet but Angular
        finished the basic initialization. So, our properties can now be accesssed and initialised, for example, so the object was
        created. If we want, then the ngOnInit will run after the constructor.</li>
        <li><b>ngDoCheck</b>: This method will be executed a lot because this will execute whenever change detection executes. Now,
        Change Detection, simply, is the system by which Angular determines whether something changed on the template of the component
        or inside of a component. So, whether it needs to change something in the template, it will need to re-render that part of 
        the template. This will be executed for every event. Change Detection is done by Angular in a very efficient manner. It is a
        good method to be used to execute something on every change detection cycle.</li>
        <li><b>gnAfterContentInit</b>: This is called whenever the content which is projected via ng-content has been initialised. So,
        not the view of the component itself, but instead the view of the parent component, especially a part which will get added to
        our component through ng-content.</li>
        <li><b>ngAfterContentChecked</b>: This is executed whenever change detection checked this content we are projecting into our
        component.</li>
        <li><b>ngAfterViewInit</b>: This is executed once the view of our own component has been finished initialising, so once our 
        view has been rendered.</li>
        <li><b>ngAfterViewChecked</b>: This is called whenever our view has been checked. So, once we are sure that, either all 
        changes which had to be done were displayed in the view or no changes were detected by Angular.</li>
        <li><b>ngOnDestroy</b>: And finally, if we destroy a component, then this is called. This is used for some cleanup work 
        because this is called right before the object itself will be destroyed by the Angular.</li>
    </ul>
    </p>
</div>