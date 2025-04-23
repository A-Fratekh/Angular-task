import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  @Output() tabSelected  = new EventEmitter<string>();
  tabs = [
    { 
      label: 'For appraisal', 
      route: 'appraisal', 
      icon: 'fas fa-list-ul', 

    },
    { 
      label: 'For posting', 
      route: 'posting', 
      icon: 'far fa-file-alt', 
    },
    { 
      label: 'For review', 
      route: 'review', 
      icon: 'far fa-eye',  
    }
  ];

  tabSelectedEmitter(param :string){
    this.tabSelected.emit(param);
  }
  constructor() { }

  ngOnInit(): void { }
}
