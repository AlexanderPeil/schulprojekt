import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { SchoolwearHomeComponent } from './components/schoolwear-home/schoolwear-home.component';
import { CoursesHomeComponent } from './components/courses-home/courses-home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { SchoolwearComponent } from './components/schoolwear/schoolwear.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ImageSliderComponent,
    SchoolwearHomeComponent,
    CoursesHomeComponent,
    CoursesComponent,
    FooterComponent,
    SchoolwearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
