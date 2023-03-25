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