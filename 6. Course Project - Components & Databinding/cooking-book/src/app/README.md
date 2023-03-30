# Adding Navigation with Event Binding and ngIf
Here, we will hook up navigation to either load recipes or the shopping list. Here, we will use ngIf to load one of the two sections at a time somehow in the app.component, because we have included both of them there. Here, we will need to manage which one should be displayed and which one should be displayed in the header component. So, we kind of need to pass the information about which link was clicked to the app-component so that we can, then, switch Property there to display only one of these two components.

We can start with the header-component template where we have two links: Recipes and Shopping List. To these links, we will attach some click listeners and pass a string in it as an argument.


# Passing Recipe Data with Property Binding
Now, we will work on the list of recipe.

# Passing Data with Event and Property Binding (Combined)
Here, we, somehow, need to emit an event on the single recipe-item.component, that it was clicked and then get this event somehow to the recipes.component (which then also holds the recipe detail to pass down the event data) which recipe was selected to that component.
Now, in the single recipe-item.component.html, we have the link and we want to make sure that whenever this link is clicked, we emit an event informing our parent component that this recipe was selected. For this, we will add a click listener to this link and call the onSelected() method. This method will be implmented in recipe-item.component.ts file.

# Allowing the User to Add Ingredients to the Shopping List
Here, we will work on the shopping-list edit component. Now, next we want to allow the user to add new items.