import { Component } from '@angular/core';
import { CardViewComponent } from "../card-view/card-view.component";
import { CommonModule } from '@angular/common';
import { AppraisalService } from '../appraisal.service';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-for-appraisal',
  imports: [CardViewComponent, CommonModule, FilterComponent],
  templateUrl: './for-appraisal.component.html',
  styleUrl: './for-appraisal.component.css'
})
export class ForAppraisalComponent {
  appraisalList : any;

  constructor(private appraisalService:AppraisalService, private router : Router){
  }
  ngOnInit(){
    this.appraisalList=this.appraisalService.getAppraisals();
  }

  startAppraisalHandler(param:string){
    this.router.navigate(['/appraisalDetails', param]);
  }
}
