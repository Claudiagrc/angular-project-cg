import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  template: `
  <div class="container mt-4">
 <div class="banner">
  <img src="assets/images/banner2.jpg" alt="Pizza Banner">
  <div class="banner-text">
    
  </div>
</div>
<div class="container mx-auto">
  <div class="row">
    <div class="col-md-12 mx-auto">
      <h2>
          Le pizze più buone della città, fatte con amore e con ingredienti freschi!<br>
          Scopri il menù e scopri qual'è la pizza giusta per te!
      </h2>
      <p>
          Ordina online e ricevi la tua pizza calda e gustosa direttamente a casa tua!<br>
          Non aspettare, ordina subito!
      </p>
     
      <div class="text-center">
         <a  class="btn btn-warning btn-lg mt-3" [routerLink]="['/menu']">Sfoglia il Menù</a>
        </div>     
    </div>
  </div>
</div>
</div>
   

  `,
  styles: ``
})
export class HomeComponent {

}
