import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { School } from '../models/school.model';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';



@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public fileRef; //guardo la referencia al archivo subido

  constructor( 
    private http:HttpClient,
    private storage: AngularFireStorage
  ) { }

  public save( school:School ):Observable<any> {
    return this.http.post ( `${environment.urlApi}/school`, school, {observe:'body'}  );
  }
  public update( school:School ):Observable<any> {
    return this.http.put ( `${environment.urlApi}/school`, school, {observe:'body'}  );
  }

  // public async uploadFile ( fileUpload: File, idSchool:number, type: string ): Promise<any> {


  //   const ext = fileUpload.name.split ('.')[ fileUpload.name.split ('.').length - 1];
  //   console.log ('extension', ext);
  //   const filePath = `schools/${idSchool}_${type}_${Date.now()}.${ext}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = await this.storage.upload(filePath, fileUpload);
  
  //   // observe percentage changes
  //   //this.uploadPercent = task.percentageChanges();
  //   // get notified when the download URL is available
    
  //   return fileRef.getDownloadURL().toPromise();
  // }



  public uploadFile ( fileUpload: File, idSchool:string, type: string ): Observable<any> {
    const ext = fileUpload.name.split ('.')[ fileUpload.name.split ('.').length - 1];
    const filePath = `schools/${idSchool}/${idSchool}_${type}_${Date.now()}.${ext}`;
    this.fileRef = this.storage.ref(filePath);
    return this.storage.upload(filePath, fileUpload).snapshotChanges();
  }

  public get ( idSchool:string ): Observable<any> {
    let params = new HttpParams().set("idSchool",idSchool.toString());
    return this.http.get ( `${environment.urlApi}/school`, {observe:'body', params: params}  );
  }

  public async deleteFile ( filePath:string ) {
    return await this.storage.storage.refFromURL(filePath).delete();
  }
  
  public updateImage ( school: School ):Observable<any> {
    return this.http.post ( `${environment.urlApi}/school/updateImage`, { idSchool: school.idSchool, urlImage: school.urlImage, urlShield: school.urlShield }, {observe:'body'}  );
  }

}
