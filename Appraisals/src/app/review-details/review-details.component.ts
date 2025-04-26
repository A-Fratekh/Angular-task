import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-details',
  imports: [CommonModule],
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.css'
})
export class ReviewDetailsComponent {
review : any;
constructor(private dataService:DataService, private activeRouter : ActivatedRoute){}
  ngOnInit(): void {
    const reviewId  = this.activeRouter.snapshot.paramMap.get('id');
    if(reviewId){
      this.dataService.getReviewById(reviewId).subscribe((data:any)=>{
        this.review=data;
      });
    }
    }
}
