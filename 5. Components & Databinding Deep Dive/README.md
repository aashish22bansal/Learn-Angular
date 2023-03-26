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