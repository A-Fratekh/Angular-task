import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from "../grid-view/grid-view.component";
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-for-posting',
  standalone: true,
  imports: [RouterModule, CommonModule, GridViewComponent, FormsModule, FilterComponent],
  templateUrl: './for-posting.component.html',
  styleUrls: ['./for-posting.component.css']
})
export class ForPostingComponent {
  postingList: any[] = [];
  selectedPostings: any[] = [];
  filteredList :any[] = [];

  constructor( private searchService : SearchService) {}

  ngOnInit() {
    this.searchService.search.subscribe(searchString => {
      this.serachChangeHandler(searchString);
    });
  }

  toggleSelection(id: string): void {
    const index = this.selectedPostings.indexOf(id);
    if (index === -1) {
      this.selectedPostings.push(id);
      console.log(this.selectedPostings)
    } else {
      this.selectedPostings.splice(index, 1);
    }
  }

  toggleSelectAll(): void {
    if (this.areAllSelected()) {
      this.selectedPostings = [];
    } else {
      this.selectedPostings = this.postingList.map(p => p.id);
    }
  }

  areAllSelected(): boolean {
    return this.postingList.length > 0 && this.selectedPostings.length === this.postingList.length;
  }

  isIndeterminate(): boolean {
    return this.selectedPostings.length > 0 && !this.areAllSelected();
  }

  serachChangeHandler(searchString : string){
    const lowerSearch = searchString.toLowerCase().trim();

    this.filteredList = this.postingList.filter((item :string) =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowerSearch)
      )
    );
  }
}
