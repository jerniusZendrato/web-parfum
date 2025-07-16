import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KeranjangService } from '../../service/keranjang.service';

@Component({
  selector: 'app-button-keranjang',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './button-keranjang.component.html',
  styleUrl: './button-keranjang.component.css'
})
export class ButtonKeranjangComponent implements OnInit{

   savedProducts: any[] = [];
    cartCount: number = 0; 
    isOpen = false;

   constructor(private keranjangService: KeranjangService) {}

   ngOnInit(): void {
    this.updateCartCount();
    // Reactive subscribe ke keranjang$
    this.keranjangService.keranjang$.subscribe((data) => {
      this.savedProducts = data;
      this.updateCartCount();
    });
    
  }
  updateCartCount() {
    this.cartCount = this.savedProducts.reduce((total, item) => total + (item.jumlah || 1), 0);
  }

  openCart(event: Event) {
    event.preventDefault();
    this.isOpen = true;
  }

  closeCart() {
    this.isOpen = false;
  }

  removeItem(item: any) {
    this.keranjangService.removeItem(item); // Gunakan service
  }

  checkout() {
    alert('Lanjut ke pembayaran...');
    // Tambahkan logika checkout bila perlu
  }


}
