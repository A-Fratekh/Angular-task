import { Component, OnInit, TemplateRef } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchService } from '../search.service';
import { Router, NavigationEnd } from '@angular/router';
import { selectedTab } from './selectedTabEnum';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardViewComponent } from '../card-view/card-view.component';
import { GridViewComponent } from '../grid-view/grid-view.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-appraisals',
  standalone: true,
  imports: [NavBarComponent, SearchBarComponent, CommonModule, FormsModule, CardViewComponent, GridViewComponent],
  templateUrl: './appraisals.component.html',
  styleUrl: './appraisals.component.css'
})
export class AppraisalsComponent implements OnInit {

  data: any[] = [];
  filteredList: any[] = [];
  selectedTab =  selectedTab.ForReview;
  selectedTabStr :string= '';
  selectedTabEnum = selectedTab;
  filter: 'process' | 'history' = 'process';
  appraisalType: string = '';
  periodType :string ='';
  adminUnit : string = '';
  appraisalTypes: string[] = ['Mid year performance review', 'Annual review', 'Probation review'];
  periodTypes: string[] = ['Days', 'Month'];
  adminUnits: string[] = ['Accounting', 'Dev', 'Sales', 'Support'];


  constructor(
    private searchService: SearchService,
    private router: Router,
    private dataService: DataService
  ) {}

  
  ngOnInit() {
    const path = this.router.url.split('/').pop();
        
    if (path === 'appraisal') {
      this.selectedTab = selectedTab.ForAppraisal;
      this.selectedTabStr = 'appraisal'
    } else if (path === 'posting') {
      this.selectedTab = selectedTab.ForPosting;
      this.selectedTabStr = 'posting'
    } else if (path === 'review') {
      this.selectedTab = selectedTab.ForReview;
      this.selectedTabStr = 'review'
    }

    
    this.loadData();
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadData();
    });
    
    this.searchService.search.subscribe(searchString => {
      this.searchChangeHandler(searchString);
    });
  }
  
  loadData() {
    switch (this.selectedTab) {
      case selectedTab.ForAppraisal:  
        this.dataService.getAppraisals().subscribe(data => {
          this.data = data;
          this.applyFilters();
        });
        break;
      case selectedTab.ForPosting:  
        this.dataService.getPostings().subscribe(data => {
          this.data = data;
          this.filteredList = [...this.data];
        });
        break;
      case selectedTab.ForReview:  
        this.dataService.getReviews().subscribe(data => {
          this.data = data;
          this.applyFilters();
        });
        break;
    }
  }
  
  applyFilters() {
    let results = [...this.data];


    if (this.appraisalType) {
      results = results.filter(item => 
        item.reviewTitle === this.appraisalType
      );
    }
    
    if (this.periodType) {
      results = results.filter(item => 
        item.dueIn === this.periodType ||
        (typeof item.dueIn === 'string' && item.dueIn.includes(this.periodType))
      );
    }

    if(this.selectedTabStr==='posting'&&this.adminUnit){
      results = results.filter(item => 
        item.position === this.adminUnit ||
        (typeof item.position === 'string' && item.position.includes(this.adminUnit))
      );
    }
    this.filteredList = results;
  }
  filterByAppraisalType() {
    this.applyFilters();
  }

  filterByPeriodType() {
    this.applyFilters();
  }
  filterByAdminUnit() {
    this.applyFilters();
    }
  
switchTabHandler(tab: string) {
    
    let routeParam = '';
    switch (tab) {
      case selectedTab.ForAppraisal.toString() :
        routeParam = 'appraisal';
        break;
      case selectedTab.ForPosting.toString() :
        routeParam = 'posting';
        break;
      case selectedTab.ForReview.toString() :
        routeParam = 'review' ;
        break;
    }
    this.router.navigate(['/appraisals', routeParam]);
  }
  
  startAppraisalHandler(id: string) {
    this.router.navigate(['appraisals/appraisal', id]);
  }
  
  continueAppraisalHandler(id: string) {
    this.router.navigate(['appraisals/appraisal', id]);
  }

  reviewAppraisalHandler(id:string){
    this.router.navigate(['appraisals/review', id])
  }
  postingAppraisalHandler(id:string){
    this.router.navigate(['appraisals/posting', id])
  }
  searchChangeHandler(searchString: string) {
    const lowerSearch = searchString.toLowerCase().trim();
    let results : any[] = [...this.data] ;
  
    results = results.filter((item: any) =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowerSearch)
      )
    );
    
    this.filteredList = results;
    if (!lowerSearch) {
      this.filteredList = [...this.data]
      return;
    }
  }
  
}