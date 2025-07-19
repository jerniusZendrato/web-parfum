import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, PreloaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parfum-web';
  loading = true;

  ngOnInit() {
  setTimeout(() => {
    this.loading = false;
  }, 2500); // 2.5 detik
}
}
