import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe; // There will not be any value assigned to this because we want to get the value of this from outside, for which
  // we will add the @Input() Decorator. We will bind this in the recipe-list.component.html file.

  @Output() recipeSelected = new EventEmitter<void>(); // Here, the type has been set to "void" because it will not contain any information
  // And, we will have to add the @Output() Decorator so that we can listen to this event from outside.
  // After this, we will trigger this in the onSelected() method.

  onSelected(){
    this.recipeSelected.emit();
    // We could pass the recipe on which this was emitted but we don't need to do this because what is parent component listening to that?
  }
}
