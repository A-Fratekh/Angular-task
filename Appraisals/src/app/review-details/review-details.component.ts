import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-details',
  imports: [],
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.css'
})
export class ReviewDetailsComponent {
review : any;
constructor(private reviewService:ReviewService, private activeRouter : ActivatedRoute){}
  ngOnInit(): void {
    const appraisalId  = this.activeRouter.snapshot.paramMap.get('id');
    if(appraisalId){
      this.reviewService.getReviewById(appraisalId).subscribe((data:any)=>{
        this.review=data;
      });
    }
    }
}
