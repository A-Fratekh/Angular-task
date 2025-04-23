import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private contextSubject = new BehaviorSubject<string>('inProcess');
  public context = this.contextSubject.asObservable();
  
  getContext(): string {
    return this.contextSubject.value;
  }
  
  setContext(newContext: string): void {
    this.contextSubject.next(newContext);
  }
}
