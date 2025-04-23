import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-card-view',
  imports: [CommonModule],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent implements OnInit {
  selectedMode : string ='';
  private subscription!: Subscription;
  
  constructor(private filterService : FilterService){
  }
  @Input() mode: 'appraisal' | 'review' = 'appraisal';
  @Input() userData: any;
  @Output() startAppraisalClicked = new EventEmitter<string>();
  @Output() reviewAppraisalClicked = new EventEmitter<string>();
  
  ngOnInit(){
    this.selectedMode = this.filterService.getContext();

  this.subscription = this.filterService.context.subscribe(context => {
    this.selectedMode = context;
  });
  }
  
   startAppraisalEmit(param: string) {
    this.startAppraisalClicked.emit(param);
  }
  reviewAppraisalEmit(param : string){
    this.reviewAppraisalClicked.emit(param);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
}
}
