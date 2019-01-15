import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-two',
  templateUrl: './slide-two.component.html',
  styleUrls: ['./slide-two.component.scss']
})
export class SlideTwoComponent implements OnInit {
  slideShow: number;
  transformRight: boolean;
  transformLeft: boolean;
  slideArray: any = [
    {
      img: 'assets/images/uno.png',
      alt: 'uno',
      text: 'Titulo Para Imagen 1',
      slideIn: false,
      slideOut: false
    },
    {
      img: 'assets/images/dos.png',
      alt: 'dos',
      text: 'Titulo Para Imagen 2',
      slideIn: false,
      slideOut: false
    },
    {
      img: 'assets/images/tres.png',
      alt: 'tres',
      text: 'Titulo Para Imagen 3',
      slideIn: false,
      slideOut: false
    },
    {
      img: 'assets/images/cuatro.png',
      alt: 'cuatro',
      text: 'Titulo Para Imagen 4',
      slideIn: false,
      slideOut: false
    },
    {
      img: 'assets/images/cinco.png',
      alt: 'cinco',
      text: 'Titulo Para Imagen 5',
      slideIn: false,
      slideOut: false
    },
    {
      img: 'assets/images/seis.png',
      alt: 'seis',
      text: 'Titulo Para Imagen 6',
      slideIn: false,
      slideOut: false
    },
    {
      img: 'assets/images/siete.png',
      alt: 'siete',
      text: 'Titulo Para Imagen 7',
      slideIn: false,
      slideOut: false
    }
  ];
  constructor() {
    this.slideShow = 0;
  }

  ngOnInit() {
    this.slideArray[0].slideIn = true;
    console.log('INIT Animation', this.slideArray);
    // this.slideShow++;
  }

  nextSlide() {
    // Recorremos el array para que se mueva solo el que se necesita
    for (let i = 0; i < this.slideArray.length; i++) {
      if (i === this.slideShow) {
        this.slideArray[i].slideOut = true;
        this.slideArray[i].slideIn = false;
      } else {
        this.slideArray[i].slideIn = false;
        this.slideArray[i].slideOut = false;
      }
    }
    if (this.slideShow < (this.slideArray.length - 1)) {
      this.slideShow++;
      this.slideArray[this.slideShow].slideIn = true;
    } else {
      this.slideShow = 0;
      this.slideArray[this.slideShow].slideIn = true;
    }
    console.log('Ir al Slide', this.slideShow);
  }
  prevSlide() {
    if (this.slideShow < 1) {
      this.slideShow = this.slideArray.length - 1;
    } else {
      this.slideShow--;
    }
    console.log('Ir al Slide', this.slideShow);
  }

}
