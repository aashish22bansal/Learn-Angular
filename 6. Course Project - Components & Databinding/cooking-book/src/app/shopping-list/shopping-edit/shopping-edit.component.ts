import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('namedInput') namedInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;
  // Emitting the new Event to pass this data to the parent component which manages the array of ingredients.
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); //This is just a Type Definition with the Ingredient Model.
  // We will need to listen to this event in the shopping-list.component.html

  constructor(){
  }

  ngOnInit() {
      
  }

  onAddItem(){
    // creating the new Item
    const newIngredient = new Ingredient(this.namedInputReference.nativeElement.value, this.amountInputReference.nativeElement.value);
    // We need this to be constant because we are not going to change these values and we do not want them to be changed in transmission.

    // Emitting the event
    this.ingredientAdded.emit(newIngredient);
  }
}
