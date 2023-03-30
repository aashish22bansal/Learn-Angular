import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // Creating the Array of ingredients
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 10),
    new Ingredient('Banana', 20),
    new Ingredient('Cucumber', 30)
  ];
  constructor(){}
  ngOnInit(){}

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
