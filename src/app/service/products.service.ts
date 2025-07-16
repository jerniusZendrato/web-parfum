import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products = [
    {
      id: '001',
      img: 'https://images.unsplash.com/photo-1626178793922-eae75f37880e?auto=format&fit=crop&w=500&q=80',
      name: "New Gabriele chanel paris man's perfume",
      desc: 'An ode to masculine freedom expressed in an aromatic woody fragrance.',
      tipe: 1,
      price: 200,
    },
    {
      id: '002',
      img: 'https://images.unsplash.com/photo-1585155774081-b55f53b59610?auto=format&fit=crop&w=500&q=80',
      name: "New Gabriele chanel paris woman's perfume",
      desc: '',
      tipe: 1,
      price: 210,
    },
    {
      id: '003',
      img: 'https://images.unsplash.com/photo-1610919265408-1968f354d7c8?auto=format&fit=crop&w=500&q=80',
      name: "Woman's Coco Perfume",
      desc: 'The aroma of love and captivating memory.',
      tipe: 1,
      price: 185,
    },
    {
      id: '003',
      img: 'https://images.unsplash.com/photo-1597764699516-8fd6a3aa504d?auto=format&fit=crop&w=500&q=80',
      name: 'Velvet Rose Perfume',
      desc: 'Floral elegance meets modern luxury.',
      tipe: 0,
      price: 240,
    },
    {
      id: '003',
      img: 'https://images.unsplash.com/photo-1603808033190-f09be539c445?auto=format&fit=crop&w=500&q=80',
      name: 'Classic Oud',
      desc: 'Intense and unforgettable oriental scent.',
      tipe: 0,
      price: 260,
    },
  ];

  getProducts() {
    return this.products;
  }
}
