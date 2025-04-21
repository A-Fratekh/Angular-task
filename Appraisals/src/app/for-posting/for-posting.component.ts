import { Component, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from "../grid-view/grid-view.component";
import { PostingService } from '../posting.service';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-for-posting',
  imports: [RouterModule, CommonModule, GridViewComponent, FormsModule, FilterComponent],
  templateUrl: './for-posting.component.html',
  styleUrl: './for-posting.component.css'
})
export class ForPostingComponent {
  postingList : any;
  @Output() allSelected  = false;
  selectedPostings! :any[];
    constructor(private postingService:PostingService){
    }
    ngOnInit(){
      this.postingList=this.postingService.getPostings();
    }

    toggleSelectAll(): void {
      this.allSelected = !this.allSelected;
      if (this.allSelected) {
        this.selectedPostings = this.postingList;
      } else {
        this.selectedPostings = [];
      }
    }
}
