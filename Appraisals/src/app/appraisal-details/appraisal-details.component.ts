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
  appraisalId! : any;

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService){
  }


  ngOnInit(): void {

   this.activeRouter.paramMap.subscribe((params)=>{
    this.appraisalId = params.get('id');
  })
  if(this.appraisalId){
    this.dataService.getAppraisalById(this.appraisalId).subscribe((data:any)=>{
      this.appraisal=data;
    });
  }
  }

  
}
