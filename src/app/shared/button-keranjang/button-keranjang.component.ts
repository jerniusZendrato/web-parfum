import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-keranjang',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './button-keranjang.component.html',
  styleUrl: './button-keranjang.component.css'
})
export class ButtonKeranjangComponent {
  
  isOpen = false;
  
  cartItems = [
    { name: 'Parfum Floral', qty: 1, image: 'https://source.unsplash.com/80x80/?perfume,flower' },
    { name: 'Parfum Citrus', qty: 2, image: 'https://source.unsplash.com/80x80/?perfume,citrus' },
  ];
  
  cartCount = this.cartItems.length;

  
  openCart(event: Event) {
    event.preventDefault();
    this.isOpen = true;
  }

  closeCart() {
    this.isOpen = false;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.cartCount = this.cartItems.reduce((acc, i) => acc + i.qty, 0);
  }

  checkout() {
    alert('Lanjut ke pembayaran...');
    // Logic checkout disini
  }


}
