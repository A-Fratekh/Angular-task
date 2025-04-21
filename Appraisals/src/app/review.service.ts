import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient : HttpClient) { }

  getReviews(): Observable<any>{
    return this.httpClient.get('/assets/data/reviewData.json');
  }

   getReviewById(id: string): Observable<any> {
      return this.getReviews().pipe(
        map((appraisals:any) => appraisals.find((appraisal:any) => appraisal.id === id))
      );
    }
}
