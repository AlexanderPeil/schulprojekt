import { Component } from '@angular/core';
import { SliderImage } from 'src/app/shared/image-interface';

@Component({
  selector: 'app-schoolwear-home',
  templateUrl: './schoolwear-home.component.html',
  styleUrls: ['./schoolwear-home.component.scss']
})
export class SchoolwearHomeComponent {

  sliderImages: SliderImage[] = [
    {
      src: 'assets/img/slider_img1.jpg',
      text: 'Das war unser letzter Kurs',
      link: '#'
    },
    {
      src: 'assets/img/slider_img2.jpg',
      text: 'Wir haben neue Kurse am Start',
      link: '#'
    },
    {
      src: 'assets/img/slider_img3.jpg',
      text: 'Hier können sie unsere Zeiten einsehen',
      link: '#'
    },
    {
      src: 'assets/img/slider_img4.jpg',
      text: 'Das planen wir in der Zukunft',
      link: '#'
    }
  ];

}
