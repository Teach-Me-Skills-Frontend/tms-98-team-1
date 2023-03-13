import { images, sliderLine } from "./constants.js";

export class SliderView {
  constructor(){
    this.images = images;
    this.sliderLine = sliderLine;
    this.count = 0;
    this.width;

    this.x1 = null;
    this.y1 = null;

    this.autoSlider()
    this.sliderResize()

    document.querySelector("#slider_next").addEventListener('click', this.next);
    document.querySelector("#slider_prev").addEventListener('click', this.prev);
    window.addEventListener('resize', this.sliderResize);
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchmove', this.handleTouchSMove);

  }

  sliderResize = () => {
      this.width = document.querySelector('#slider').offsetWidth;
      this.sliderLine.style.width = this.width*this.images.length + 'px';
      this.images.forEach(item => {
          item.style.width = this.width + 'px';
          item.style.height = 'auto';
      });
      this.rollSlider()
  }

  rollSlider = () => {
    this.sliderLine.style.transform = "translate(-" + this.count * this.width + 'px)';
  }
  
  next = () => {
      this.count++;
      if (this.count >= this.images.length) {
        this.count = 0;
      }
      this.rollSlider()
  }

  prev = () => {
      this.count--;
      if (this.count < 0) {
        this.count = this.images.length -1;
    }
    this.rollSlider()
  }

  autoSlider = () => {
    setInterval(this.next, 7000);
  }

  handleTouchStart = (event) => {
    const firstTouch = event.touches[0];
    this.x1 = firstTouch.clientX;
    this.y1 = firstTouch.clientY;
  };

  handleTouchSMove = (event) => {
    if(!this.x1 || !this.y1){
    return false;
    };
    let x2 =  event.touches[0].clientX;
    let y2 =  event.touches[0].clientY;

    let xDiff = x2 - this.x1;
    let yDiff = y2 - this.y1;

    if(Math.abs(xDiff) > Math.abs(yDiff)){

        if(xDiff > 0 ) {
            this.prev();
        }
        else {
          this.next();
        }
    }
    this.x1 = null;
    this.y1 = null;
};
}
