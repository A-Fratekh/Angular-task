import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../filter.service';

export type ComponentContext = 'appraisals' | 'review' | 'posting';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FilterComponent implements OnInit {
  @Input() context: ComponentContext = 'appraisals';
  @Output() filterChanged = new EventEmitter<any>();
  
  constructor(private filterService : FilterService){
  }

  selectedOption: string ='inProcess'; 

  appraisalTypes = {
    inProcess: [],
    history: []
  };
  
  periods: string[] = [];
  
  adminUnits: string[] = ['Accountant Officer', 'Developer', 'Support', 'Sales'];
  
  selectedAppraisalType: string = '';
  selectedPeriod: string = '';
  selectedAdminUnit: string = '';

  ngOnInit(): void {

    if (this.isAppraisalOrReviewContext()) {
      this.selectedAppraisalType = '';
    } else {
      this.selectedAdminUnit = '';
    }
  }

  selectOption(option:string): void {
     this.filterService.setContext(option);
     this.selectedOption = this.filterService.getContext();
    
    if (this.isAppraisalOrReviewContext()) {
      this.selectedAppraisalType = '';
    }
    this.emitFilterChanges();
  }

  isAppraisalOrReviewContext(): boolean {
    return this.context === 'appraisals' || this.context === 'review';
  }

  isPostingContext(): boolean {
    return this.context === 'posting';
  }

  shouldShowPeriod(): boolean {
    return this.isAppraisalOrReviewContext() && this.selectedOption === 'history';
  }

  getCurrentAppraisalTypes(): string[] {
    return this.appraisalTypes[this.selectedOption as keyof typeof this.appraisalTypes];
  }
  
  onAppraisalTypeChange(): void {
    this.emitFilterChanges();
  }
  
  onPeriodChange(): void {
    this.emitFilterChanges();
  }
  
  onAdminUnitChange(): void {
    this.emitFilterChanges();
  }
  
  emitFilterChanges(): void {
    if (this.isAppraisalOrReviewContext()) {
      this.filterChanged.emit({
        selectedOption: this.selectedOption,
        selectedAppraisalType: this.selectedAppraisalType,
        selectedPeriod: this.selectedPeriod
      });
    } else {
      this.filterChanged.emit({
        selectedAdminUnit: this.selectedAdminUnit
      });
    }
  }
}