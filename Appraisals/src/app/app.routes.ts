import { RouterModule, Routes } from '@angular/router';
import { ForAppraisalComponent } from './for-appraisal/for-appraisal.component';
import { NgModule } from '@angular/core';
import { ForPostingComponent } from './for-posting/for-posting.component';
import { ForReviewComponent } from './for-review/for-review.component';
import { AppraisalDetailsComponent } from './appraisal-details/appraisal-details.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { AppraisalsComponent } from './appraisals/appraisals.component';

export const routes: Routes = [
    {path : 'appraisals', component: AppraisalsComponent, title:'Appraisals'},
    // {path : 'appraisals/posting', component: ForPostingComponent, title: 'For Posting'},
    // {path : 'appraisals/review', component: ForReviewComponent, title: 'For Review'},
    // {path : 'appraisals/appraisal', component:ForAppraisalComponent, title: 'For Appraisal'},
    {path : 'appraisals/appraisal/:id', component: AppraisalDetailsComponent, title:'Appraisal Details'},
    {path : 'review/:id', component: ReviewDetailsComponent, title:'Appraisal Review Details'},
    {path : '**', redirectTo: '/appraisals', pathMatch:'full'},
    
];
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })

  export class AppRouting{}