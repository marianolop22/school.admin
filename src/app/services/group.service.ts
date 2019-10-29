import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Group } from '../models/group.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient
  ) { }

  public save( group:Group ):Observable<any> {
    return this.http.post ( `${environment.urlApi}/groups`, group, {observe:'body'}  );
  }
  public update( group:Group ):Observable<any> {
    return this.http.put ( `${environment.urlApi}/groups`, group, {observe:'body'}  );
  }

  public get ( group:Group  ): Observable<any> {
    let params = new HttpParams()
                  .set("idSchool",group.idSchool)
                  .set("idGroup", group.idGroup)
                  .set("year", group.year);
    return this.http.get ( `${environment.urlApi}/groups`, {observe:'body', params: params}  );
  }

  public getList ( idSchool:string, year: string  ): Observable<any> {
    let params = new HttpParams()
                  .set("idSchool",idSchool)
                  .set("year",year);
    return this.http.get ( `${environment.urlApi}/groups/getGroupList`, {observe:'body', params: params}  );
  }
}
