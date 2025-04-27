import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getAppraisals(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data/data.json');
  }
  getPostings() : Observable<any>{
    return this.http.get<any[]>('/assets/data/postingData.json');
  }
  getReviews(): Observable<any>{
    return this.http.get<any[]>('/assets/data/reviewData.json');
  }

   getReviewById(id: string): Observable<any> {
      return this.getReviews().pipe(
        map((reviews:any) => reviews.find((review:any) => review.id === id))
      );
    }

  getAppraisalById(id: string): Observable<any> {
    return this.getAppraisals().pipe(
      map((appraisals:any) => appraisals.find((appraisal:any) => appraisal.id === id))
    );
  }

  getPostibgById(id: string): Observable<any> {
    return this.getPostings().pipe(
      map((postings:any) => postings.find((posting:any) => posting.id === id))
    );
  }

}
