import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() searchString = new EventEmitter<string>();
  searchValue: string = '';
  constructor(){

  }

  onSearchChange(){
    return this.searchString.emit(this.searchValue);
  }

}
