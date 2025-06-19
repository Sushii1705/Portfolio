import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Angular', level: 85 },
  ];
}
