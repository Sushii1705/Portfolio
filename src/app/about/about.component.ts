import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   ngAfterViewInit(): void {
    new Typed('.typing-2', {
      strings: ['Full Stack Developer', 'Angular Developer', 'Problem Solver','Web Developer','Frontend Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

}
