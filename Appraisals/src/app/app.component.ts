import { Component } from '@angular/core';
import { RouterOutlet , Router, NavigationEnd} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor() { 
   
  }
  
  ngOnInit(): void {
  }
}
