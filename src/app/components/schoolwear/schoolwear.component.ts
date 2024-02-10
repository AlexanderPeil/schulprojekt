import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SliderImage } from 'src/app/shared/image-interface';

@Component({
  selector: 'app-schoolwear',
  templateUrl: './schoolwear.component.html',
  styleUrls: ['./schoolwear.component.scss']
})
export class SchoolwearComponent implements OnInit {

  ngOnInit(): void {

  }

  sliderImages: SliderImage[] = [
    {
      src: 'assets/img/phone_1.jpg',
      text: 'Sehr schönes Stück',
      price: '10,50 Euro',
      link: '#'
    },
    {
      src: 'assets/img/phone_2.jpg',
      text: 'Aus unserer Sommer-Kollektion',
      price: '999,99 Euro',
      link: '#'
    },
    {
      src: 'assets/img/phone_3.jpg',
      text: 'Gerade im Super-Spar-Angebot',
      price: '25,00 Euro',
      link: '#'
    },
    {
      src: 'assets/img/phone_4.jpg',
      text: 'Der letzte Schrei',
      price: '15,80 Euro',
      link: '#'
    },
    {
      src: 'assets/img/slider_img1.jpg',
      text: 'T-Shirts Mädels',
      price: '5,50 Euro',
      link: '#'
    },
    {
      src: 'assets/img/slider_img2.jpg',
      text: 'T-Shirts Männer',
      price: '12,00 Euro',
      link: '#'
    },
    {
      src: 'assets/img/slider_img3.jpg',
      text: 'Pulli Männer',
      price: '10,50 Euro',
      link: '#'
    },
    {
      src: 'assets/img/slider_img4.jpg',
      text: 'Pulli Frauen',
      price: '12,9 Euro',
      link: '#'
    },
  ];


  scrollToTop(event: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
