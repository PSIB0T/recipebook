import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingCreated = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput')  amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  createIngredient() {
    const ingName: string = this.nameInput.nativeElement.value;
    const ingAmount: number = parseInt(this.amountInput.nativeElement.value);
    const newIngredient: Ingredient = {
      name: ingName,
      amount: ingAmount
    }
    this.ingCreated.emit(newIngredient);
  }

}
