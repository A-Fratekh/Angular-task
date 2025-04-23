import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { selectedTab } from './selectedTabEnum';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardViewComponent } from '../card-view/card-view.component';
import { GridViewComponent } from '../grid-view/grid-view.component';


@Component({
  selector: 'app-appraisals',
  imports: [NavBarComponent, SearchBarComponent,CommonModule, FormsModule, CardViewComponent, GridViewComponent],
  templateUrl: './appraisals.component.html',
  styleUrl: './appraisals.component.css'
})
export class AppraisalsComponent implements OnInit {
  data : any[] = [];
  filteredList : any[] = [];
  selectedTab = selectedTab.ForAppraisals;

  constructor(private searchService: SearchService,private router :Router, private dataService: DataService){

  }
ngOnInit(){
  this.searchService.search.subscribe(searchString => {
    this.serachChangeHandler(searchString);
  });
  
  switch(this.selectedTab.toString()){
    case selectedTab.ForAppraisals.toString():
      this.dataService.getAppraisals().subscribe(data => {
        this.data = data;
        this.filteredList = [...this.data];
      });
      break;
      case selectedTab.ForPosting.toString():
        this.dataService.getPostings().subscribe(data => {
          this.data = data;
          this.filteredList = [...this.data];
        });
      break;
      case selectedTab.ForReview.toString():
        this.dataService.getReviews().subscribe(data => {
          this.data = data;
          this.filteredList = [...this.data];
        });
        break;
  }

 
}
switchTabHandler(param :string){
  this.router.navigate(['/appraisals', param])
}
startAppraisalHandler(param:string){
  this.router.navigate(['appraisals/appraisal', param]);
}

serachChangeHandler(searchString : string){
  const lowerSearch = searchString.toLowerCase().trim();

  this.filteredList = this.data.filter((item :string) =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(lowerSearch)
    )
  );
}

onGlobalSearch(query: string) {
  this.searchService.updateSearch(query);
}
}
