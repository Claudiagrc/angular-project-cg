import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="card h-100">
      <img [src]="pizza.image" class="card-img-top" alt="{{ pizza.name }}">
      <div class="card-body">
        <h5 class="card-title">{{ pizza.name }}</h5>
        <p class="card-text">{{ pizza.description }}</p>
        <p class="card-text">Prezzo: {{ pizza.price | currency }}</p>
        <div>
          <button class="btn btn-primary ms-2 myButton" (click)="remove()">-</button>
          <span>{{ getQuantity() }}</span>          
          <button class="btn btn-primary me-2 myButton" (click)="add()">+</button>
          <button class="btn btn-danger" (click)="removeAll()">Svuota</button>
          <button class="btn btn-secondary ms-2 myButton" [routerLink]="['/cart']">Vai al carrello<i class="fa fa-shopping-cart fa-lg"></i></button>
        </div>
        
      </div>
    </div>
  `,
  styles: ``
})
export class CardComponent {
  @Input() pizza!: Pizza;

  constructor(private cart: CartService) {}

  add() {
    this.cart.addPizza(this.pizza);
  }
  remove() {
    this.cart.removePizza(this.pizza);
  }
  removeAll() {
    this.cart.removeAllPizza(this.pizza);
  }
  getQuantity() {
    return this.cart.getQuantity(this.pizza);
  }
}