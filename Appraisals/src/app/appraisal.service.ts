// appraisal.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { routes } from './app.routes';

@Injectable({
  providedIn: 'root'
})
export class AppraisalService {
  constructor(private http: HttpClient) {}
  private baseUrl = '';

  getAppraisals(): Observable<any> {
    return this.http.get('/assets/data/data.json');
  }
  getAppraisalById(id: string): Observable<any> {
    return this.getAppraisals().pipe(
      map((appraisals:any) => appraisals.find((appraisal:any) => appraisal.id === id))
    );
  }
}
