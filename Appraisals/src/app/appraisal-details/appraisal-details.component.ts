import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppraisalService } from '../appraisal.service';
import { response } from 'express';

@Component({
  selector: 'app-appraisal-details',
  imports: [],
  templateUrl: './appraisal-details.component.html',
  styleUrl: './appraisal-details.component.css'
})
export class AppraisalDetailsComponent  implements OnInit{
  appraisal :any;

  constructor(private activeRouter: ActivatedRoute, private appraisalService: AppraisalService){
  }


  ngOnInit(): void {
  const appraisalId  = this.activeRouter.snapshot.paramMap.get('id');
  if(appraisalId){
    this.appraisalService.getAppraisalById(appraisalId).subscribe((data:any)=>{
      this.appraisal=data;
    });
  }
  }

  
}
