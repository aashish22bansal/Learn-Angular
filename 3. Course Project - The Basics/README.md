<p><p>The features of this app are:</p>
    <ol>
        <li>Shopping List</li>
        <li>Receipe Section</li>
    </ol>
</p>


<p>
    <p>The components which we will need for this are:</p>
    <ul>
        <li><b>Root Component:</b> This will hold the overall application.</li>
        <li><b>Header Component:</b> Since we have two sections, it makes sense to have some kind of component through which we can navigate between these two sections. We can hard code the headers simply into the app component but since it will contain its own business logic and it will also trigger routing action later with a drop-down in the end to store the receipes on the server and fetch them from that, hence outsourcing this and having its own component makes more sense. This will also prevent us from adding our business logic into the root component which should mainly be responsible for only holding our app.</li>
    </ul>
</p>


<p>Now, we have our individual features:
    <ol>
        <li>Shopping List</li>
        <li>Receipe Section</li>
    </ol>
</p>
