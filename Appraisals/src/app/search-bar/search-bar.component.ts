import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() mode : string='';
  @Output() searchString = new EventEmitter<string>();
  searchValue : string='';
  constructor(){

  }

  onSearchChange(){
    return this.searchString.emit(this.searchValue);
  }

}
