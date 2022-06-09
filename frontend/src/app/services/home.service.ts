import { Injectable } from '@angular/core';
import { PersonaDummy } from './../home/dummy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'api/dummy';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getDummy(): Observable<PersonaDummy[]> {
    return this.http.get<PersonaDummy[]>(apiUrl, httpOptions)
      .pipe(
        tap(_ => this.log('fetched Dummy')),
        catchError(this.handleError('getDummy', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
