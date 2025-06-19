import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
projects = [
  {
    name: 'Mechtron Water Services Website',
    tech: 'Angular • Angular Material • Bootstrap • Node.js • Express.js'
  },
  {
    name: 'WhatsApp Integration Dashboard',
    tech: 'Vue.js • Meta API • CI/CD • GitHub Actions'
  },
  {
    name: '1Medify – Health Profile Module',
    tech: 'Angular • Component Design • SCSS'
  }
];

}
