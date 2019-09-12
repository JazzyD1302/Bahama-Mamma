import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  slides = document.getElementsByClassName("Slide");
  current=0;
  
  next(){
  this.current = (this.current+1)%this.slides.length;
  this.slides[this.current].classList.remove("hideImg");
  this.slides[(this.current+this.slides.length-1)%this.slides.length].classList.add("hideImg");
  }

  pre(){
    this.current = (this.current+this.slides.length-1)%this.slides.length;
  this.slides[this.current].classList.remove("hideImg");
  this.slides[(this.current+this.slides.length+1)%this.slides.length].classList.add("hideImg");
  }


  constructor() { }

  ngOnInit() {
  }

}
