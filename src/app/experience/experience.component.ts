import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
 experiences = [
  {
    title: 'Software Development Engineer I - Frontend',
    company: 'IFANOW',
    description: 'Contributed to 10+ modules across projects focusing on Business Intelligence features and customizable user reports. Developed WhatsApp integration using Vue.js, dynamic theming, and streamlined CI/CD with GitHub Actions.',
    tech: 'Angular Vue RxJS Bootstrap SCSS HTML CSS JavaScript',
    date: 'July, 2022 – Present'
  },
  {
    title: 'Frontend Developer Intern',
    company: '1Rivet',
    description: 'Built responsive UIs using HTML, SCSS, Bootstrap and Angular. Worked on 1Talent (Leave Management App) and 1Medify (Health App), enhancing user profiles and building reusable components.',
    tech: 'Angular SCSS Bootstrap HTML CSS JavaScript',
    date: 'January, 2022 – June, 2022'
  },
  {
    title: 'Bachelor of Engineering – Information Technology',
    company: 'Laxmi Institute of Technology, GTU',
    description: 'Graduated with a CGPA of 7.70 / CPI of 7.09. Specialized in Information Technology.',
    tech: 'CGPA: 7.70 / CPI: 7.09',
    date: '2022'
  }
];

}
