import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appraisal-details',
  imports: [CommonModule],
  templateUrl: './appraisal-details.component.html',
  styleUrl: './appraisal-details.component.css'
})
export class AppraisalDetailsComponent  implements OnInit{
  appraisal :any;

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService){
  }


  ngOnInit(): void {
  const appraisalId  = this.activeRouter.snapshot.paramMap.get('id');
  if(appraisalId){
    this.dataService.getAppraisalById(appraisalId).subscribe((data:any)=>{
      this.appraisal=data;
    });
  }
  }

  
}
