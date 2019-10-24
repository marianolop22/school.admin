import { Injectable } from '@angular/core';
import { GroupTemplate } from '../models/groupTemplate.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupTemplateService {

  constructor(
    private http: HttpClient
  ) { }

  public save( groupTemplate:GroupTemplate ):Observable<any> {
    return this.http.post ( `${environment.urlApi}/groupTemplate`, groupTemplate, {observe:'body'}  );
  }
  public update( groupTemplate:GroupTemplate ):Observable<any> {
    return this.http.put ( `${environment.urlApi}/groupTemplate`, groupTemplate, {observe:'body'}  );
  }

  public get ( groupTemplate:GroupTemplate  ): Observable<any> {
    let params = new HttpParams()
                  .set("idSchool",groupTemplate.idSchool)
                  .set("idGroup", groupTemplate.idGroup);
    return this.http.get ( `${environment.urlApi}/groupTemplate`, {observe:'body', params: params}  );
  }

  public getList ( idSchool:string  ): Observable<any> {
    let params = new HttpParams()
                  .set("idSchool",idSchool)
    return this.http.get ( `${environment.urlApi}/groupTemplate/getGroupTemplateList`, {observe:'body', params: params}  );
  }
}
