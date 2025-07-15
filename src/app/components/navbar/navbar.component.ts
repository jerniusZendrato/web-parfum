import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ButtonKeranjangComponent } from '../../shared/button-keranjang/button-keranjang.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,ButtonKeranjangComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  isMobile = false;
  scrolled = false;
  isMobileMenuOpen = false;

  // ✅ Jalankan hanya setelah view dimuat, aman untuk window access
  ngAfterViewInit() {
    this.checkScreenSize();
  }

  // ✅ Deteksi resize window
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  // ✅ Cek jika lebar layar < 768px
  checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 768;
    }
  }

  // ✅ Deteksi scroll untuk ubah background navbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.scrolled = offset > 50;
    }
  }

  // ✅ Toggle mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }



}
