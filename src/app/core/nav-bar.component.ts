import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-md  navbartop ">
      <div class="container-fluid mynavbar">

      <div class="navbar-brand">
            <img src="/assets/images/logo.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
           <a class="mynavbar-brand" routerLink="/home" >Claudia's Pizza Shop</a>
        </div>
      
       
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>                
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
               <a aria-current="page" routerLink="/home" routerLinkActive="active">Home</a> 
            </li>
            <li class="nav-item">
              <a aria-current="page" routerLink="/menu" routerLinkActive="active">Menu</a>
            </li>
            <li class="nav-item">
              <a routerLink="/cart" routerLinkActive="active">Cart</a>
            </li>
          </ul>
        </div>

      </div>
        
    
    </nav>


  `,
  styles: ``,
})
export class NavBarComponent {}
