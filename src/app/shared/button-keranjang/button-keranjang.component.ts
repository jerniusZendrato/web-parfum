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
  const cart = JSON.parse(localStorage.getItem('savedProducts') || '[]');
  if (cart.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }

  const phoneNumber = "6285157144414";

  // Ambil tanggal hari ini
  const today = new Date();
  const tanggal = today.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Hitung total
  const total = cart.reduce((sum: number, item: any) => sum + (item.price * item.jumlah), 0);

  // Format awal pesan (tanpa lokasi dulu)
  let message = `--- *INVOICE PESANAN* ---\n\n`;
  message += `Terima kasih telah berbelanja!\nPesanan Anda sedang kami siapkan.\n\n`;
  message += `🗓️ *Tanggal:* ${tanggal}\n\n`;
  message += `*RINCIAN PRODUK*`;

  cart.forEach((item: any) => {
    const subTotal = item.price * item.jumlah;
    message += `\n> ${item.name}\n  ${item.jumlah} x Rp${item.price.toLocaleString('id-ID')} = Rp${subTotal.toLocaleString('id-ID')}`;
  });

  message += `\n\n----------------------------------------`;
  message += `\n*TOTAL PEMBAYARAN*\nRp${total.toLocaleString('id-ID')}`;
  message += `\n----------------------------------------\n`;

  message += `\nSilakan transfer ke rekening:\nBank XYZ - 1234567890\n(a/n Nama Toko Anda)\n`;
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  // Ambil lokasi GPS
}

}
