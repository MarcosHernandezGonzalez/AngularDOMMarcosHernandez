import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import {changeSize, countWords, img} from "./Funcions.js";

@Component({
  selector: 'app-dom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.css'
})
export class DomComponent {
  size = 100
  palabras = 0;
  constructor() {

  }
  yellowSubmarine() {
    // @ts-ignore
    document.getElementById("groc").style.color = "yellow";
  }

  ngOnInit(){
    let mayus = document.getElementById("mayus");
    // @ts-ignore
    mayus.innerHTML = mayus.innerHTML.toUpperCase();
    this.yellowSubmarine()
    changeSize()
    this.palabras = countWords()
    img()
  }


  protected readonly document = document;
}

