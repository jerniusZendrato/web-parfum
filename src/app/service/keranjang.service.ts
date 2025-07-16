import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class KeranjangService {


  constructor() { }

   private keranjangKey = 'savedProducts';

  private _keranjang$ = new BehaviorSubject<any[]>(this.loadkeranjang());
  keranjang$ = this._keranjang$.asObservable(); // komponen bisa subscribe

  private loadkeranjang(): any[] {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(this.keranjangKey);
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  private savekeranjang(keranjang: any[]) {
    localStorage.setItem(this.keranjangKey, JSON.stringify(keranjang));
    this._keranjang$.next(keranjang); // emit update
  }

  getCurrentkeranjang() {
    return this._keranjang$.value;
  }

  addItem(item: any) {
    const keranjang = this.getCurrentkeranjang();
    keranjang.push(item);
    this.savekeranjang(keranjang);
  }

  removeItem(item: any) {
  const keranjang = this.getCurrentkeranjang().filter(i => i !== item);
  this.savekeranjang(keranjang);               // simpan ke localStorage
  this._keranjang$.next(keranjang);             // ⚠️ update BehaviorSubject
  console.log("masuk sini")
}


  clearkeranjang() {
    this.savekeranjang([]);
  }

  private saveToLocalStorage(cart: any[]) {
    localStorage.setItem('savedProducts', JSON.stringify(cart));
  }

  // ✅ INI YANG KAMU TAMBAHKAN
  saveItems(items: any[]) {
    const current = this._keranjang$.value;
    const merged = [...current];

    items.forEach(item => {
      const exists = current.some(i => i.name === item.name);
      if (!exists) {
        merged.push(item);
      }
    });

    this.saveToLocalStorage(merged);
    this._keranjang$.next(merged); // Update observable
  }

}
