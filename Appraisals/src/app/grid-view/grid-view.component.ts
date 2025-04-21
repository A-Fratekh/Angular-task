import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [MatGridListModule, MatCheckboxModule, CommonModule, FormsModule],
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent {
  @Input() postingData: any;
  @Input() isSelected: boolean = false;
  @Output() selectionChange = new EventEmitter<void>();

  toggleSelection(): void {
    this.selectionChange.emit();
  }

  getRatingText(rating: number): string {
    if (rating >= 70) return 'Very good';
    else if (rating >= 40) return 'Good';
    else return 'Bad';
  }
}
