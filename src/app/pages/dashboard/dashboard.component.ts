import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FootersComponent } from '../../components/footers/footers.component';
import { BestSellerComponent } from '../../components/best-seller/best-seller.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CarouselComponent, FootersComponent,BestSellerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
