<div class=".container">
    <h1>Directives Deep Dive<h1>
    <p>
        <p>There are two types of directives:</p>
        <ol>
            <li><b>Attribute Directives</b>: These are used with elements just like attributes. For example, if the condition in <code>ngIf()</code> is <code>false</code>, then it will not be completely destroyed from the DOM (unlike Structural Directives). Here, we will only change the properties of that element.</li>
            <li><b>Structural Directives</b>: These are also used with elements but they change the structure of the DOM around this element. For example, if the condition in <code>ngIf()</code> is <code>false</code>, then it will be completely removed from that structure, so that overall view container is affected.</li>
        </ol>
    </p>
</div>