import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardViewComponent } from "../card-view/card-view.component";
import { CommonModule } from '@angular/common';
import { ReviewService } from '../review.service';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-review',
  imports: [RouterModule, CardViewComponent, CommonModule, FilterComponent],
  templateUrl: './for-review.component.html',
  styleUrl: './for-review.component.css'
})
export class ForReviewComponent {
  reviewList : any;
 
    constructor(private reviewService:ReviewService, private router : Router){
    }
    ngOnInit(){
      this.reviewList=this.reviewService.getReviews();
    }

    reviewAppraisalhandler(param:string){
      this.router.navigate(['/review', param]);
    }
}
