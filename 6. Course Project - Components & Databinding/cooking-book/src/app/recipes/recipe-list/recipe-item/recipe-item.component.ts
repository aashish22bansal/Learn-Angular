import { Component, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe; // There will not be any value assigned to this because we want to get the value of this from outside, for which
  // we will add the @Input() Decorator. We will bind this in the recipe-list.component.html file.
}
