import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppraisalDetailsComponent } from './appraisal-details/appraisal-details.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { AppraisalsComponent } from './appraisals/appraisals.component';
import { PostingDetailsComponent } from './posting-details/posting-details.component';

export const routes: Routes = [
    {path : 'appraisals/appraisal', component: AppraisalsComponent, title:'Appraisals'},
    {path : 'appraisals/posting', component: AppraisalsComponent, title:'Postings'},
    {path : 'appraisals/review', component: AppraisalsComponent, title:'Reviews'},
    {path : 'appraisals/appraisal/:id', component: AppraisalDetailsComponent, title:'Appraisal Details'},
    {path : 'appraisals/review/:id', component: ReviewDetailsComponent, title:'Appraisal Review Details'},
    {path : 'appraisals/posting/:id', component: PostingDetailsComponent, title:'Appraisal Posting Details'},
    {path : '**', redirectTo: '/appraisals/appraisal', pathMatch:'full'},
    
];
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })

  export class AppRouting{}