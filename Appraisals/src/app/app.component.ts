import { Component } from '@angular/core';
import { RouterOutlet , Router, NavigationEnd} from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  context : any = '';

  constructor(private searchService: SearchService, private router: Router) { 
   
  }
  
  ngOnInit(): void {
  }
}
