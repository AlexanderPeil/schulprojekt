import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  scrollToTop(event: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
