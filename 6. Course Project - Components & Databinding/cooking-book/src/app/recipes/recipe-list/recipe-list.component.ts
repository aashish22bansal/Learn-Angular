import { Component, OnInit } from '@angular/core';
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
  constructor(){}

  ngOnInit(){}
}
