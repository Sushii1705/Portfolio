import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 ngAfterViewInit(): void {
    const options = {
      strings: ['Frontend Developer', 'Angular Developer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    new Typed('.typing', options);
  }
}
