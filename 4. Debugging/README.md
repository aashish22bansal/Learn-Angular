<div>
    <h1>Using Console in Developer Tools</h1>
    <div>
        <p>Sometimes when we do not get the desired output on the screen, then we can open the Console from the Developer Section and it can show us certain results or it can directly show us some of the run-time error which might be thrown either by the code or the browser.</p>
        <p>Now, the way the error messages are being shown in Angular have improved, so they give us a lot of useful information about where the error is located and why there is an error. With this information, we can go back to our code and check at that location and resolve the issue. It is not necessary that there is error only in that one particular location, the error might be caused by some other error leading to a chain reaction.</p>
    </div>
    <br>
    <h1></h1>
    <div>
        <p>Sometimes it might happen that we have a logical error in the code. Now, debugging is supported by the Developer Tools in the Browser, so it possible for us to check during runtime for the reason behind the logic not working. For this, in Developer Tools, we can go to "Sources", where we will find all the sources imported into this page (in this case, all the script bundles). Sometimes we might be able to access the TypeScript Files but we know that it is not possible to run TypeScript file directly into the Browser. We know that the JavaScript files support SourceMaps (which allows the Browser to translate/map the JavaScript code and the TypeScript code) which can allow us to place breakpoints in the TypeScript code and then we can further continue with debugging our code.</p>
        <p>We can even find all the files within the browser in the "Sources" section.</p>
    </div>
</div>