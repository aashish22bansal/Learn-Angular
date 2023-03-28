import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  // Adding an Array of Recipes
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a Test Recipe','https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg'),
    new Recipe('A Test Recipe','This is a Test Recipe','https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg'),
    new Recipe('A','B','C')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // Here, we need to make of type Recipe because we need to pass the recipe that was
  // selected because that is the information the recipes component will need in the end. As before, we will need to add @Output() so that we can
  // listen to the event from outside and hence use it in the onRecipeSelected() method.
  constructor(){}

  ngOnInit(){}

  onRecipeSelected(recipe: Recipe){
    // Now, here we need to get some extra information, for example, which recipe was selected, so the recipeElement was passed as
    // an argument to the onRecipeSelected() method.
    this.recipeWasSelected.emit(recipe);
    // Now, we will go to the recipes.component.html (which is the main feature area) and on the list we can listen to the 
    // recipeWasSelected (the custom event) and store the recipe for which we will create the selectedRecipe in the recipes.component.ts file.
    // It will, initially, not have any value.
  }
}
