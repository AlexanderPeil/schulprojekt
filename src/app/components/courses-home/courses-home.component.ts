import { Component } from '@angular/core';
import { SliderImage } from 'src/app/shared/image-interface';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.scss']
})
export class CoursesHomeComponent {
  
  sliderImages: SliderImage[] = [
    {
      src: 'assets/img/phone_1.jpg',
      text: 'Das war unser letzter Kurs',
      link: '#'
    },
    {
      src: 'assets/img/phone_2.jpg',
      text: 'Wir haben neue Kurse am Start',
      link: '#'
    },
    {
      src: 'assets/img/phone_3.jpg',
      text: 'Hier können sie unsere Zeiten einsehen',
      link: '#'
    },
    {
      src: 'assets/img/phone_4.jpg',
      text: 'Das planen wir in der Zukunft',
      link: '#'
    }
  ];
  

}
