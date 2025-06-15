import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../shared/card.component';
import { Pizza } from '../../models/pizza';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../shared/cart.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container mt-4">
      <h2>Menù delle pizze disponibili</h2>
      <p>Seleziona la pizza che preferisci!</p>
      <div class="row">
        <div class="col-10 col-md-6 col-lg-3 mb-4" *ngFor="let pizza of pizzaList()">
          <app-card
            [pizza]="pizza"
            [quantity]="cart.getQuantity(pizza)"
            (addPizza)="aggiungiAlCarrello($event)"
            (removePizza)="rimuoviDalCarrello($event)"
            (removeAllPizza)="svuotaDalCarrello($event)">
          </app-card>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class MenuPizzaComponent implements OnInit {
  pizzaList = signal<Pizza[]>([]);

  constructor(public http: HttpClient, public cart: CartService) {}

  ngOnInit(): void {
    this.http
      .get<Pizza[]>('https://my-json-server.typicode.com/zoelounge/menupizza/cards')
      .subscribe((res) => {
        this.pizzaList.set(res);
      });
  }

  aggiungiAlCarrello(pizza: Pizza) {
    this.cart.addPizza(pizza);
  }

  rimuoviDalCarrello(pizza: Pizza) {
    this.cart.removePizza(pizza);
  }

  svuotaDalCarrello(pizza: Pizza) {
    this.cart.removeAllPizza(pizza);
  }
}