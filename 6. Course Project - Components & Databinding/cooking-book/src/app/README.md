# Adding Navigation with Event Binding and ngIf
Here, we will hook up navigation to either load recipes or the shopping list. Here, we will use ngIf to load one of the two sections at a time somehow in the app.component, because we have included both of them there. Here, we will need to manage which one should be displayed and which one should be displayed in the header component. So, we kind of need to pass the information about which link was clicked to the app-component so that we can, then, switch Property there to display only one of these two components.

We can start with the header-component template where we have two links: Recipes and Shopping List. To these links, we will attach some click listeners and pass a string in it as an argument.


# Passing Recipe Data with Property Binding
Now, we will work on the list of recipe.