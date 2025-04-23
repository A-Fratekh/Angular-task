import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardViewComponent } from "../card-view/card-view.component";
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-for-review',
  imports: [RouterModule, CardViewComponent, CommonModule, FilterComponent],
  templateUrl: './for-review.component.html',
  styleUrl: './for-review.component.css'
})
export class ForReviewComponent {
  reviewList : any[] = [];
  filteredList : any[] = [];
 
    constructor(private router : Router, private searchService : SearchService){
    }
    ngOnInit(){
      this.searchService.search.subscribe(searchString => {
        this.searchChangeHandler(searchString)
      });

    }

    reviewAppraisalhandler(param:string){
      this.router.navigate(['/review', param]);
    }

    searchChangeHandler(searchString:string){
      const lowerSearch = searchString.toLowerCase().trim();

    this.filteredList = this.reviewList.filter((item :string) =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowerSearch)
      )
    );
    }
}
