import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card.component';
import { Pizza } from '../../models/pizza';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="container mt-4">
      <h2>Menù delle pizze disponibili</h2>
      <p>Seleziona la pizza che preferisci!</p>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-4" *ngFor="let pizza of pizza">
          <app-card [pizza]="pizza"></app-card>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class MenuPizzaComponent implements OnInit {
  pizza: Pizza[] = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Pizza[]>('https://my-json-server.typicode.com/zoelounge/menupizza/cards')
      .subscribe((res) => {
        this.pizza = res;
        console.log(this.pizza);
      });
  }
}