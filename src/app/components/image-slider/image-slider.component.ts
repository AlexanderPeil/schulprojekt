import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  // currentImage: string = 'assets/img/slider_img1.jpg';
  // private pointer: number = 0;
  // intervalId: any;

  sliderImages: string[] = [
    'assets/img/slider_img1.jpg',
    'assets/img/slider_img2.jpg',
    'assets/img/slider_img3.jpg',
    'assets/img/slider_img4.jpg'
  ];


  // ngOnInit() {
  //   this.currentImage = this.sliderImages[0]
  //   this.imageSlideShow();
  // }


  // imageSlideShow() {
  //   this.intervalId = setInterval(() => {
  //     this.pointer = (this.pointer + 1) % this.sliderImages.length;
  //     this.currentImage = this.sliderImages[this.pointer];
  //   }, 2500);
  //   console.log(this.intervalId);
  // }


  // nextImage() {
  //   this.pointer = (this.pointer + 1) % this.sliderImages.length;
  //   this.currentImage = this.sliderImages[this.pointer];
  //   this.resetSlideshow();
  // }

  // previousImage() {
  //   if (this.pointer === 0) {
  //     this.pointer = this.sliderImages.length;
  //   }
  //   this.pointer = (this.pointer - 1) % this.sliderImages.length;
  //   this.currentImage = this.sliderImages[this.pointer];
  //   this.resetSlideshow();
  // }


  // resetSlideshow() {
  //   if (this.intervalId != null) {
  //     clearInterval(this.intervalId);
  //   }
  //   this.imageSlideShow();
  // }


  // ngOnDestroy() {
  //   if (this.intervalId != null) {
  //     clearInterval(this.intervalId);
  //   }
  // }

}
