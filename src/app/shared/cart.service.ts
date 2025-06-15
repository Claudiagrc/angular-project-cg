import { Injectable, signal } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart = signal<{ [id: number]: { pizza: Pizza, quantity: number, price: number } }>({});

  constructor(private router: Router) {}

addPizza(pizza: Pizza) {
  if (this.getTotalQuantity() >= 50) {
    return; 
  }
  const current = { ...this.cart() };
  if (!current[pizza.id]) {
    current[pizza.id] = { pizza, quantity: 0, price: pizza.price };
  }
  current[pizza.id].quantity++;
  this.cart.set(current);
}

  removePizza(pizza: Pizza) {
    const current = { ...this.cart() };
    if (current[pizza.id]) {
      current[pizza.id].quantity--;
      if (current[pizza.id].quantity <= 0) {
        delete current[pizza.id];
      }
      this.cart.set(current);
    }
  }

  removeAllPizza(pizza: Pizza) {
    const current = { ...this.cart() };
    if (current[pizza.id]) {
      delete current[pizza.id];
      this.cart.set(current);
    }
  }

  getQuantity(pizza: Pizza): number {
    return this.cart()[pizza.id]?.quantity || 0;
  }

  getTotalQuantity(): number {
    return Object.values(this.cart()).reduce((a, b) => a + b.quantity, 0);
  }

  getTotalPrice(): number {
    return Object.values(this.cart()).reduce((a, b) => a + b.price * b.quantity, 0);
  }

  getCartItems() {
    return Object.values(this.cart());
  }

  clearCart() {
    this.cart.set({});
    this.router.navigate(['/home']);
  }


  cartSignal = this.cart.asReadonly();
}