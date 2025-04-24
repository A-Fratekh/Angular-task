import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];
  @Input() adminUnits: string[] = [];
  @Output() postingAppraisal = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<string[]>();

  selectedUnit: string = '';
  selectedItems: string[] = [];
  allSelected: boolean = false;
  filteredItems: any[] = [];

  ngOnInit() {
    this.filteredItems = [...this.items];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.filteredItems = [...this.items];
      this.updateSelectAllState();
    }
  }

  onAdminUnitChange() {
    if (!this.selectedUnit) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => 
        item.department.includes(this.selectedUnit) || 
        item.position.includes(this.selectedUnit)
      );
    }
    this.updateSelectAllState();
  }

  toggleSelectAll() {
    if (this.allSelected) {
      this.selectedItems = this.filteredItems.map(item => item.id);
    } else {
      this.selectedItems = [];
    }
    this.selectionChange.emit(this.selectedItems);
  }

  toggleSelection(id: string) {
    const index = this.selectedItems.indexOf(id);
    if (index === -1) {
      this.selectedItems.push(id);
    } else {
      this.selectedItems.splice(index, 1);
    }
    this.updateSelectAllState();
    this.selectionChange.emit(this.selectedItems);
  }

  updateSelectAllState() {
    this.allSelected = this.filteredItems.length > 0 && 
                      this.filteredItems.every(item => 
                        this.selectedItems.includes(item.id)
                      );
  }

  onViewDetails(id: string) {
    this.postingAppraisal.emit(id);
  }

  getRatingLabel(rating: number): string {
    if (rating >= 70) return 'Very good';
    if (rating >= 50) return 'Good';
    return 'Bad';
  }

  getSegmentColorClass(index: number, rating: number, max: number): string {
    const thresholds = [0.2, 0.4, 0.7, 1];
    const ratio = rating / max;
  
    if (ratio >= thresholds[index]) {
      if (ratio >= 0.7) return 'bg-success';
      if (ratio >= 0.4 && ratio<70) return 'bg-warning';    
      if (ratio >= 0.2) return 'bg-danger';  
      return 'bg-danger';
    }
    return 'bg-light';
  }
  
}