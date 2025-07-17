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
    // this.cartCount = this.savedProducts.reduce((total, item) => total + (item.jumlah || 1), 0);
        this.cartCount = this.savedProducts.length
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
    // alert('Lanjut ke pembayaran...');
    // Tambahkan logika checkout bila perlu
    const cart = JSON.parse(localStorage.getItem('savedProducts') || '[]');
    if (cart.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }
    let message = `🛒 *Order Parfum*\n\n`;

    cart.forEach((item: any, index: number) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   Deskripsi: ${item.desc}\n`;
    message += `   Qty: ${item.jumlah} pcs\n`;
    message += `   Harga: Rp${item.price.toLocaleString('id-ID')}\n\n`;
  });

    const total = cart.reduce((sum: number, item: any) => sum + (item.price * item.jumlah), 0);
  message += `🧾 *Total: Rp${total.toLocaleString('id-ID')}*\n`;

    const phoneNumber = "6285157144414";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  }


}
