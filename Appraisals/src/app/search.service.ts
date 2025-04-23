import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  private searchSubject = new BehaviorSubject<string>('');
  search = this.searchSubject.asObservable();

  updateSearch(value: string) :any {
    return this.searchSubject.next(value);
  }
}
