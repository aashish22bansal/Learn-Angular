# Features of the Project
<p><p>The features of this app are:</p>
    <ol>
        <li>Shopping List</li>
        <li>Receipe Section</li>
    </ol>
</p>

# Components of the Project
<p>
    <p>The components which we will need for this are:</p>
    <ul>
        <li><b>Root Component:</b> This will hold the overall application.</li>
        <li><b>Header Component:</b> Since we have two sections, it makes sense to have some kind of component through which we can navigate between these two sections. We can hard code the headers simply into the app component but since it will contain its own business logic and it will also trigger routing action later with a drop-down in the end to store the receipes on the server and fetch them from that, hence outsourcing this and having its own component makes more sense. This will also prevent us from adding our business logic into the root component which should mainly be responsible for only holding our app.</li>
    </ul>
</p>

# Individual Features
<p>Now, we have our individual features:
    <ol>
        <li>
            <p>
                <b>Shopping List:</b> Here, we have the following sub-components:
                <ul>
                    <li>Shopping List: This is a component that will be holding the shopping list.</li>
                    <li>Shopping List Edit: The shopping list component will also need an edit part which will allow us to add new items. It will also have its own logic which we will have to decide for adding a new item or editing an existing item.</li>
                </ul>
                So, the first component will hold all the data for the app and the second component will help in managing the app.
            </p>
        </li>
        <li>
            <p>
                <b>Receipe Section: </b> Here, we have the following sub-components:
                <ul>
                    <li>Receipe List: This is a component that will be holding all the receipes.</li>
                    <li>Receipe Item: This component will be working along with the Receipe List Component to display information about a single item.</li>
                    <li>Receipe Detail: After selecting a Receipe, we will be able to see all the details of the Receipies.</li>
                </ul>
            </p>
        </li>
    </ol>
</p>

# Models used in the App
<p>The Models which will be used in this app will mostly involve the data. Some of the models which we will need are:
    <ul>
        <li>Ingredient: We will be using this for both Shopping List and Recipe Book (because each recipe has a couple of ingridents). We should be fine with how an ingredient looks like. This is something which our application also needs. We need to be clear about the data that we are going to use put the data into it's own class, so that we have its own type which we can use later on and that we have clear interface and definition of what the data looks like so that we have easily have the components talk with each other so that there is no issue regarding the data that we are exchanging.</li>
        <li>Recipe: This will contain the data like the title, the description, the ingredients, and so on.</li>
    </ul>
</p>