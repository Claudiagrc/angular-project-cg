import { Component } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  
  imports: [RouterLink,CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Il tuo carrello</h2>
      <div *ngIf="cartItems.length === 0">
        <p>Il carrello è vuoto.</p>
      </div>
      <div *ngFor="let item of cartItems" class="mb-3">
        <div class="card">
          <div class="card-body d-flex align-items-center justify-content-between">
            <div>
              <h5 class="card-title">{{ item.pizza.name }}</h5>
              <p class="card-text">Prezzo: {{ item.pizza.price | currency }}</p>
            </div>
            <div>
              <button class="btn btn-primary ms-2 myButton" (click)="remove(item.pizza)">-</button>
              <span>{{ item.quantity }}</span>
              <button class="btn btn-primary me-2 myButton" (click)="add(item.pizza)">+</button>
              <button class="btn btn-danger" (click)="cleanPizza(item.pizza)">Elimina Pizza</button>
              
            </div>
          </div>
        </div>
      </div>
      <div *ngIf="cartItems.length > 0" class="mt-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4>Dettagli del carrello</h4>
              <p>Totale pizze: {{ totalQuantity }}</p>
              <p>Totale da pagare: {{ totalPrice | currency }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
             
              <button class="btn btn-secondary myButton" [routerLink]="['/menu']">Aggiungi altre pizze</button>
              
              <button class="btn btn-success" (click)="checkout()">Procedi al pagamento</button>

              <div class="myModal" *ngIf="showModal">
                <h4>Pagamento effettuato con successo!</h4>
                <button class="btn btn-primary myButton" (click)="closeModal()">OK</button>
            </div>
            </div>

        </div>
        
      </div>
    </div>
  `,
  styles: ``
})
export class CartComponent {
  showModal = false;

  get cartItems() {
    return this.cart.getCartItems();
  }
  get totalQuantity() {
    return this.cart.getTotalQuantity();
  }
  get totalPrice() {
    return this.cart.getTotalPrice();
  }

  constructor(public cart: CartService) {}

  add(pizza: any) {
    this.cart.addPizza(pizza);
  }
  remove(pizza: any) {
    this.cart.removePizza(pizza);
  }
  cleanPizza(pizza: any) {
    this.cart.removeAllPizza(pizza);
  }

   checkout() {
  this.showModal = true;
  }
  closeModal() {
  this.showModal = false;
  this.cart.clearCart();
}
}