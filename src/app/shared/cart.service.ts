import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: { [id: number]: { pizza: Pizza, quantity: number, price: number } } = {};

    constructor(private router: Router) { }
    
  addPizza(pizza: Pizza) {
    if (!this.cart[pizza.id]) {
      this.cart[pizza.id] = { pizza, quantity: 0, price: pizza.price };
    }
    this.cart[pizza.id].quantity++;
  }

  removePizza(pizza: Pizza) {
    if (this.cart[pizza.id]) {
      this.cart[pizza.id].quantity--;
      if (this.cart[pizza.id].quantity <= 0) {
        delete this.cart[pizza.id];
      }
    }
    }
    
      removeAllPizza(pizza: Pizza) {
    if (this.cart[pizza.id]) {
       delete this.cart[pizza.id];
    }
  }

  getQuantity(pizza: Pizza): number {
    return this.cart[pizza.id]?.quantity || 0;
  }

  getTotalQuantity(): number {
    return Object.values(this.cart).reduce((a, b) => a + b.quantity, 0);
  }

  getTotalPrice(): number {
   
    return Object.values(this.cart).reduce((a, b) => a + b.price * b.quantity, 0);
  }

  getCartItems(): { pizza: Pizza, quantity: number, price: number }[] {
    return Object.values(this.cart);
    }
    
     clearCart() {
         this.cart = {};
         this.router.navigate(['/home']);
  }
}