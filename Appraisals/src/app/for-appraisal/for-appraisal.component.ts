import { Component } from '@angular/core';
import { CardViewComponent } from "../card-view/card-view.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-for-appraisal',
  imports: [CardViewComponent, CommonModule, FilterComponent],
  templateUrl: './for-appraisal.component.html',
  styleUrl: './for-appraisal.component.css'
})
export class ForAppraisalComponent {
  appraisalList : any[] = [];
  filteredList : any[] = [];
  constructor(private router : Router, private searchService : SearchService){
  }
  ngOnInit(){
    this.searchService.search.subscribe(searchString => {
      this.serachChangeHandler(searchString);
    });
  }

  startAppraisalHandler(param:string){
    this.router.navigate(['/appraisal', param]);
  }

  serachChangeHandler(searchString : string){
    const lowerSearch = searchString.toLowerCase().trim();

    this.filteredList = this.appraisalList.filter((item :string) =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowerSearch)
      )
    );
  }
}
