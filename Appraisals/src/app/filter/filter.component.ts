import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  
  selectedOption: string = 'history'; // Default selection
  
  // Appraisal/Review context data
  appraisalTypes = {
    inProcess: ['Pending Review', 'Awaiting Approval', 'Draft'],
    history: ['Annual Review', 'Performance Review', 'Self Assessment', 'Peer Review']
  };
  
  periods: string[] = ['Current Quarter', 'Last Quarter', 'Current Year', 'Last Year'];
  
  // Posting context data
  adminUnits: string[] = ['HR Department', 'Finance', 'Marketing', 'Engineering', 'Operations'];
  
  selectedAppraisalType: string = '';
  selectedPeriod: string = '';
  selectedAdminUnit: string = '';

  ngOnInit(): void {
    // Set default values
    if (this.isAppraisalOrReviewContext()) {
      this.selectedAppraisalType = '';
    } else {
      this.selectedAdminUnit = '';
    }
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    // Reset the selected appraisal type when switching between in process and history
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