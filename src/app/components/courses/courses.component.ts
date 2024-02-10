import { Component } from '@angular/core';
import { SliderImage } from 'src/app/shared/image-interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  courses: SliderImage[] = [
    {
      src: 'assets/img/phone_1.jpg',
      headline: 'Smartphone Kurs 1',
      text: 'Das war unser letzter Kurs',
      link: '#'
    },
    {
      src: 'assets/img/phone_2.jpg',
      headline: 'Smartphone Kurs 2',
      text: 'Wir haben neue Kurse am Start',
      link: '#'
    },
    {
      src: 'assets/img/phone_3.jpg',
      headline: 'Smartphone Kurs 3',
      text: 'Hier können sie unsere Zeiten einsehen',
      link: '#'
    },
    {
      src: 'assets/img/phone_4.jpg',
      headline: 'Smartphone Kurs 4',
      text: 'Das planen wir in der Zukunft',
      link: '#'
    }
  ];

  scrollToTop(event: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
