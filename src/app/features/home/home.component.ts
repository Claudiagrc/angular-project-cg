import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <!-- home.component.html -->
<div class="banner">
  <img src="assets/images/banner2.jpg" alt="Pizza Banner">
  <div class="banner-text">
    
  </div>
</div>
<div class="container mx-auto">
  <div class="row">
    <div class="col-md-6 mx-auto">
      <p>Le pizze più buone della città, fatte con amore e con ingredienti freschi!</p>
  
      <p>Scopri il menù e scopri qual'è la pizza giusta per te!</p>
      <a  class="btn btn-warning btn-lg mt-3" [routerLink]="['/menu']">Sfoglia il Menù</a>
    </div>
  </div>
</div>
  `,
  styles: ``
})
export class HomeComponent {

}
