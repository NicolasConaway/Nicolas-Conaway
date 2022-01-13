import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations'
import { Project } from '../../../Models/Project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(100)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(100, style({opacity: 0})))
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  projectList: Project[] = [
    {
      title: 'Clone Site',
      source: '',
      github: 'https://github.com/',
      website: '',
      isActive: false
    },
    {
      title: 'Perfect Score Site',
      source: '',
      github: 'https://github.com/',
      website: '',
      isActive: false
    },
    {
      title: 'API Site',
      source: '',
      github: 'https://github.com/',
      website: '',
      isActive: false
    },
    {
      title: 'eCommerce Site',
      source: '',
      github: 'https://github.com/',
      website: '',
      isActive: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  projectOptions(project: Project) {
    project.isActive = !project.isActive;
  }

}
