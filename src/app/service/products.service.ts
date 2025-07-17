import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products = [
    {
      id: '001',
      img: 'https://picsum.photos/200',
      name: "New Gabriele chanel paris man's perfume",
      desc: 'An ode to masculine freedom expressed in an aromatic woody fragrance.',
      tipe: 1,
      price: 200000,
    },
    {
      id: '002',
      img: 'https://picsum.photos/200',
      name: "New Gabriele chanel paris woman's perfume",
      desc: '',
      tipe: 1,
      price: 210000,
    },
    {
      id: '003',
      img: 'https://picsum.photos/200',
      name: "Woman's Coco Perfume",
      desc: 'The aroma of love and captivating memory.',
      tipe: 1,
      price: 185000,
    },
    {
      id: '003',
      img: 'https://picsum.photos/200',
      name: 'Velvet Rose Perfume',
      desc: 'Floral elegance meets modern luxury.',
      tipe: 1,
      price: 240000,
    },
    {
      id: '003',
      img: 'https://picsum.photos/200',
      name: 'Classic Oud',
      desc: 'Intense and unforgettable oriental scent.',
      tipe: 1,
      price: 260000,
    },
  ];

  getProducts() {
    return this.products;
  }
}
