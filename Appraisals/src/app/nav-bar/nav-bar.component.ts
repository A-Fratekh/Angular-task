import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  tabs = [
    { 
      label: 'For appraisal', 
      route: '/appraisal', 
      icon: 'fas fa-list-ul', 
      count: 4 
    },
    { 
      label: 'For posting', 
      route: '/posting', 
      icon: 'far fa-file-alt', 
      count: 9 
    },
    { 
      label: 'For review', 
      route: '/review', 
      icon: 'far fa-eye', 
      count: 9 
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
