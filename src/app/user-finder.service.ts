import { Injectable } from '@angular/core';
import { User } from './user';
import { UserFilter } from './user-filter';
import { Result } from './result';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserFinderService {

  // URL to the user finder api
  private usersUrl = 'http://localhost:8080/userfinder';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Invoke the remote service to search users.
   */
  getUsers(userFilter:UserFilter): Observable<Result[]> {
    var newurl = this.buildQueryParams(this.usersUrl,userFilter);
    return this.http.get<Result[]>(newurl)
      .pipe(
        tap(result => this.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }

  buildQueryParams(serviceUri:string, userFilter:UserFilter): string {
    var isfirstset = false;
    var query = '';
    
    if(userFilter != null) {
      query = '?';
      if(userFilter.hasphoto) {
        query = query + "hasphoto=" + userFilter.hasphoto + "&";
      }
      if(userFilter.incontact) {
        query = query + "incontact=" + userFilter.incontact + "&";
      }
      if(userFilter.isfavourite) {
        query = query + "isfavourite=" + userFilter.isfavourite + "&";
      }
      if(userFilter.minimumage != null || userFilter.minimumage != undefined) {
        query = query + "minage=" + userFilter.minimumage + "&";
      }
      if(userFilter.maximumage != null || userFilter.maximumage != undefined) {
        query = query + "maxage=" + userFilter.maximumage + "&";
      }
      if(userFilter.mincompatibilityscore) {
        query = query + "mincompatibilityscore=" + userFilter.mincompatibilityscore + "&";
      }
      if(userFilter.maxcompatibilityscore) {
        query = query + "maxcompatibilityscore=" + userFilter.maxcompatibilityscore + "&";
      }
      if(userFilter.minimumheight) {
        query = query + "minheight=" + userFilter.minimumheight + "&";
      }
      if(userFilter.maximumheight) {
        query = query + "maxheight=" + userFilter.maximumheight + "&";
      }
      if(userFilter.distanceinkm && userFilter.currentlatitude && userFilter.currentlongitude) {
        query = query + "distanceinkm=" + userFilter.distanceinkm + "&inquirerlongitude=" +
        userFilter.currentlongitude + "&";
        if(userFilter.distanceinkm === 30) {
          query = query + "distancelowerbound=true";
        } else {
          query = query + "distancelowerbound=false";
        }
      }      
    }
    console.log(query);
    console.log(serviceUri + query);
    return serviceUri + query;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
    //this.messageService.add('HeroService: ' + message);
  }

}
