import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view',
  imports: [CommonModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {
  @Input() mode: 'appraisal' | 'review' = 'appraisal';
  @Input() userData: any;
  @Output() startAppraisalClicked = new EventEmitter<string>();
    
   startAppraisalEmit(param: string) {
    this.startAppraisalClicked.emit(param);
  }
}
 
