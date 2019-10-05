import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { School } from '../models/school.model';
import { AngularFireStorage } from '@angular/fire/storage';



@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  uploadPercent: Observable<number> = new Observable<number>();
  //downloadURL: Observable<string> = new Observable<string>();

  constructor( 
    private http:HttpClient,
    private storage: AngularFireStorage
  ) { }

  public save( school:School ):Observable<any> {
    return this.http.post ( `${environment.urlApi}/school/add`, school, {observe:'body'}  );
  }

  public async uploadFile ( fileUpload: File, idSchool:number, type: string ): Promise<any> {


    //const file = fileUpload;
    const ext = fileUpload.name.split ('.')[ fileUpload.name.split ('.').length - 1];
    console.log ('extension', ext);
    const filePath = `schools/${idSchool}_${type}_${Date.now()}.${ext}`;
    const fileRef = this.storage.ref(filePath);
    const task = await this.storage.upload(filePath, fileUpload);
  
    // observe percentage changes
    //this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    return fileRef.getDownloadURL().toPromise();
    
    // task.snapshotChanges()
    //   .pipe(
    //     finalize(() => { 
    //       fileRef.getDownloadURL().subscribe(
    //         response => {
    //           console.log ( 'url de respuesta',response );
    //           this.sendUrl = response;
    //         }
    //       );
    //     })
    //   );
  }

  public fileRef;

  public uploadFile2 ( fileUpload: File, idSchool:number, type: string ): Observable<any> {


    //const file = fileUpload;
    const ext = fileUpload.name.split ('.')[ fileUpload.name.split ('.').length - 1];
    console.log ('extension', ext);
    const filePath = `schools/${idSchool}_${type}_${Date.now()}.${ext}`;
    this.fileRef = this.storage.ref(filePath);
    return this.storage.upload(filePath, fileUpload).snapshotChanges();
  
    // observe percentage changes
    //this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    //return fileRef.getDownloadURL().toPromise();
    
    // task.snapshotChanges()
    //   .pipe(
    //     finalize(() => { 
    //       fileRef.getDownloadURL().subscribe(
    //         response => {
    //           console.log ( 'url de respuesta',response );
    //           this.sendUrl = response;
    //         }
    //       );
    //     })
    //   );
  }




  

  public updateMainImage ( school: School ):Observable<any> {
    
    return this.http.post ( `${environment.urlApi}/school/updateMainImage`, { idSchool: school.idSchool, urlImage: school.urlImage }, {observe:'body'}  );

  }

  public updateShieldImage ( school: School ):Observable<any> {
    return this.http.post ( `${environment.urlApi}/school/updateShieldImage`, { idSchool: school.idSchool, urlImage: school.urlShield }, {observe:'body'}  );
  }








}
