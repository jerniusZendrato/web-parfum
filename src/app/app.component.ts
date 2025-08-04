import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,  CommonModule ,SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parfum-web';
  showSplash = true;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Aman digunakan karena dijamin di browser
      const splashAlreadyShown = sessionStorage.getItem('splashShown') === 'true';
      if (splashAlreadyShown) {
        this.showSplash = false;
      } else {
        setTimeout(() => {
          this.showSplash = false;
          sessionStorage.setItem('splashShown', 'true');
        }, 2500);
      }
    } else {
      // SSR mode, hindari akses ke sessionStorage
      this.showSplash = false;
    }
  }
}
