import { Component, Input, NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-grid-view',
  imports: [MatGridListModule, MatCheckboxModule, CommonModule, FormsModule],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.css'
})
export class GridViewComponent {
  @Input() postingData: any; 
    selectedPostings: any[]=[];
    allSelected = false;

  toggleSelection(id: string): void {
    const index = this.selectedPostings.indexOf(id);
    if (index === -1) {
      this.selectedPostings.push(id);
      console.log(this.selectedPostings)
    } else {
      this.selectedPostings.splice(index, 1);
      console.log(this.selectedPostings)
    }
  }

 

  getRatingText(rating: number): string {
    if (rating >= 70) return 'Very good';
    else if (rating >= 40) return 'Good';
    else return 'Bad';
  }
}
