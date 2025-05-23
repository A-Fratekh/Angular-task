import { Component, Input, Output, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() view: 'process' | 'history' = 'process';
  @Input() selectedTab: string = '';
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() bodyTemplate!: TemplateRef<any>;
  @Input() footerTemplate!: TemplateRef<any>;
  
  @Output() startAppraisal = new EventEmitter<string>();
  @Output() continueAppraisal = new EventEmitter<string>();
  @Output() submit = new EventEmitter<string>();
  @Output() viewDetails = new EventEmitter<string>();
  
  selectedItems: string[] = [];
  
  ngOnInit() {
  }

  
  isSelectedItem(item: any): boolean {
    return this.selectedItems.includes(item.id);
  }
  
  onStartAppraisal(id: string) {
    this.startAppraisal.emit(id);
  }
  
  onContinueAppraisal(id: string) {
    this.continueAppraisal.emit(id);
  }
  
  
  onSubmit(id: string) {
    this.submit.emit(id);
  }
  
  onViewDetails(id: string) {
    this.viewDetails.emit(id);
  }

}