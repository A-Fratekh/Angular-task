import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posting-details',
  imports: [],
  templateUrl: './posting-details.component.html',
  styleUrl: './posting-details.component.css'
})
export class PostingDetailsComponent {
  posting :any;

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService){
  }


  ngOnInit(): void {
  const postingId  = this.activeRouter.snapshot.paramMap.get('id');
  if(postingId){
    this.dataService.getAppraisalById(postingId).subscribe((data:any)=>{
      this.posting=data;
    });
  }
  }
}
