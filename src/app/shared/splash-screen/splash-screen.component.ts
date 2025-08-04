import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent  {
  showSplash = true;
  splashVisible = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const splashShown = sessionStorage.getItem('splashShown') === 'true';

      if (splashShown) {
        this.showSplash = false;
      } else {
        // Fade-out effect
        setTimeout(() => (this.splashVisible = false), 2000);
        setTimeout(() => {
          this.showSplash = false;
          sessionStorage.setItem('splashShown', 'true');
        }, 2500);
      }
    } else {
      this.showSplash = false;
    }
  }
}
