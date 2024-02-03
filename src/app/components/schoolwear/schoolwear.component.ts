import { Component } from '@angular/core';
import { SliderImage } from 'src/app/shared/image-interface';

@Component({
  selector: 'app-schoolwear',
  templateUrl: './schoolwear.component.html',
  styleUrls: ['./schoolwear.component.scss']
})
export class SchoolwearComponent {
  sliderImages: SliderImage[] = [
    {
      src: 'assets/img/phone_1.jpg',
      text: 'Sehr schönes Stück',
      link: '#'
    },
    {
      src: 'assets/img/phone_2.jpg',
      text: 'Aus unserer Sommer-Kollektion',
      link: '#'
    },
    {
      src: 'assets/img/phone_3.jpg',
      text: 'Gerade im Super-Spar-Angebot',
      link: '#'
    },
    {
      src: 'assets/img/phone_4.jpg',
      text: 'Der letzte Schrei',
      link: '#'
    },
    {
      src: 'assets/img/slider_img1.jpg',
      text: 'Zum Sonderangebot',
      link: '#'
    },
    {
      src: 'assets/img/slider_img2.jpg',
      text: 'Zum Sonderangebot',
      link: '#'
    },
    {
      src: 'assets/img/slider_img3.jpg',
      text: 'Zum Sonderangebot',
      link: '#'
    },
    {
      src: 'assets/img/slider_img4.jpg',
      text: 'Zum Sonderangebot',
      link: '#'
    },
  ]
}
