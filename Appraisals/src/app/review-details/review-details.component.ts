import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-review-details',
  imports: [],
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.css'
})
export class ReviewDetailsComponent {
review : any;
constructor(private dataService:DataService, private activeRouter : ActivatedRoute){}
  ngOnInit(): void {
    const appraisalId  = this.activeRouter.snapshot.paramMap.get('id');
    if(appraisalId){
      this.dataService.getReviewById(appraisalId).subscribe((data:any)=>{
        this.review=data;
      });
    }
    }
}
