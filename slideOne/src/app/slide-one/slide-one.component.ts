import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-one',
  templateUrl: './slide-one.component.html',
  styleUrls: ['./slide-one.component.scss']
})
export class SlideOneComponent implements OnInit {
  selectedIndex: number;
  numberSlides: number;

  interval: any;

  slideArray: any = [
    { img: 'assets/images/uno.png', alt: 'uno', text: 'Con LBC estás preparado para cualquier accidente. 1' },
    { img: 'assets/images/dos.png', alt: 'dos', text: 'Titulo Para Imagen 2' },
    { img: 'assets/images/tres.png', alt: 'tres', text: 'Titulo Para Imagen 3' },
    { img: 'assets/images/cuatro.png', alt: 'cuatro', text: 'Titulo Para Imagen 4' },
    { img: 'assets/images/cinco.png', alt: 'cinco', text: 'Titulo Para Imagen 5' },
    { img: 'assets/images/seis.png', alt: 'seis', text: 'Titulo Para Imagen 6' },
    { img: 'assets/images/siete.png', alt: 'siete', text: 'Titulo Para Imagen 7' }
  ];
  constructor() {
    this.interval = this.initAnimation();
    this.selectedIndex = 0;
    this.numberSlides = this.slideArray.length - 1;
  }

  ngOnInit() {
  }

  initAnimation() {
    return setInterval(() => {
      if (this.selectedIndex < 6) {
        this.selectedIndex += 1;
      } else {
        this.selectedIndex = 0;
      }
    }, 5000);
  }

  chageRadio(event: any, id: number) {
    this.selectedIndex = id;
    clearInterval(this.interval);
    this.interval = this.initAnimation();
  }

  nextSlide(e: any) {
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 1000);
    clearInterval(this.interval);
    if (this.selectedIndex < 6) {
      this.selectedIndex += 1;
    } else {
      this.selectedIndex = 0;
    }
    this.interval = this.initAnimation();
  }
  prevSlide(e: any) {
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 1000);
    clearInterval(this.interval);
    if (this.selectedIndex > 0) {
      this.selectedIndex -= 1;
    } else {
      this.selectedIndex = 6;
    }
    this.interval = this.initAnimation();
  }

}
