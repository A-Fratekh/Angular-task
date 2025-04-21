import { RouterModule, Routes } from '@angular/router';
import { ForAppraisalComponent } from './for-appraisal/for-appraisal.component';
import { NgModule } from '@angular/core';
import { ForPostingComponent } from './for-posting/for-posting.component';
import { ForReviewComponent } from './for-review/for-review.component';
import { AppraisalDetailsComponent } from './appraisal-details/appraisal-details.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';

export const routes: Routes = [
    {path : 'appraisal', component: ForAppraisalComponent, title:'For Appraisals'},
    {path : 'posting', component: ForPostingComponent, title: 'For Posting'},
    {path : 'review', component: ForReviewComponent, title: 'For Review'},
    {path : 'appraisal/:id', component: AppraisalDetailsComponent, title:'Appraisal Details'},
    {path : 'review/:id', component: ReviewDetailsComponent, title:'Appraisal Review Details'},
    {path : '**', redirectTo: '/appraisal', pathMatch:'full'},
    
];
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })

  export class AppRouting{}