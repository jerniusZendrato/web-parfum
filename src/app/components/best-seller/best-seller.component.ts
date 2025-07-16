import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { KeranjangService } from '../../service/keranjang.service';

@Component({
  selector: 'app-best-seller',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent implements OnInit{

  products: any[] = [];
  savedProducts: any[] = []; // dari localStorage
  unsavedkeranjang: any[] = [];

  constructor(
    private productService: ProductsService,
    private keranjangService: KeranjangService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts().filter(p => p.tipe === 1);
    this.loadSavedProducts();
    this.checkUnsavedItems();
    this.keranjangService.keranjang$.subscribe((savedProducts) => {
    this.savedProducts = savedProducts;
    this.checkUnsavedItems(); // akan selalu update saat cart berubah
  });
  }


   // Load produk yang sudah disimpan di localStorage
  loadSavedProducts() {
  if (typeof window !== 'undefined' && localStorage) {
    const data = localStorage.getItem('savedProducts');
    this.savedProducts = data ? JSON.parse(data) : [];
  } else {
    this.savedProducts = [];
  }
}
checkUnsavedItems() {
    this.unsavedkeranjang = this.keranjang.filter(keranjangItem =>
      !this.savedProducts.some(saved => saved.name === keranjangItem.name)
    );
  }

  // Simpan produk baru dari cart ke localStorage
  saveToLocalStorage() {
    this.keranjangService.saveItems(this.unsavedkeranjang);

  }


  // Array keranjang belanja
  keranjang: any[] = [];

  onBuyClick(product: any) {
    console.log('Klik tombol Buy:', product);
     const index = this.keranjang.findIndex(item => item.name === product.name);
     
     if (index > -1) {
      // Produk sudah ada → tambah jumlah
      this.keranjang[index].jumlah += 1;
    } else {
      // Produk belum ada → tambahkan baru
      this.keranjang.push({ ...product, jumlah: 1 });
      this.checkUnsavedItems();
    }

  }

  getProductInkeranjang(product: any): any {
    return this.keranjang.find(item => item.name === product.name);
  }

  increaseQty(product: any) {
    const item = this.keranjang.find(p => p.name === product.name);
    if (item) item.jumlah++;
    this.checkUnsavedItems();
  }

  decreaseQty(product: any) {
    const index = this.keranjang.findIndex(p => p.name === product.name);
    if (index > -1) {
      if (this.keranjang[index].jumlah > 1) {
        this.keranjang[index].jumlah--;
      } else {
        this.keranjang.splice(index, 1);
      }
    }
    this.checkUnsavedItems();
  }
   
}
