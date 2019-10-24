import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/service.index';
import { School } from "src/app/models/school.model";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public school: School = new School();

  constructor(
    private _school: SchoolService
  ) { }

  ngOnInit() {
  }

  save () {

    this._school.save ( this.school ).subscribe (
      response => {
        console.log ( response );
      },
      err => {
        console.log ( err.error.message.sqlMessage );
      }
    )
  }

  update () {

    this._school.update ( this.school ).subscribe (
      response => {
        console.log ( response );
      },
      err => {
        console.log ( err.error.message.sqlMessage );
      }
    )
  }

  load () {

    this._school.get( this.school.idSchool )
      .subscribe (
        response => {
          console.log ( response );
          this.school = response.message;
        },
        err => {
          console.log ( err.error.message );
        }
      )
  }

  async uploadFile(event, field, type) {

    this._school.uploadFile ( event.target.files[0], this.school.idSchool, type )
      .pipe (
        finalize(() => { 
          this._school.fileRef.getDownloadURL().subscribe(
            response => {
              if ( this.school[field]) {

                let response = this._school.deleteFile (this.school[field] );
                console.log ( 'borrado ', response);                
              }
              this.school[field] = response;
              this._school.updateImage ( this.school ).subscribe (
                response => {
                  console.log ( 'update ')
                }
              )
            }
          )
        })
      ).subscribe ( response => {
        //console.log ( 'respuesta', response );
        let status = Math.round( (response.bytesTransferred / response.totalBytes) * 100 );
        console.log (`avance ${status}%` )
      })

  }


  delete () {

    console.log ( 'hola',this.school.urlShield);
    this._school.deleteFile (this.school.urlShield )
      .then (
        response => {
          console.log ('borrado', response);
        }
      )
      .catch (
        err => {
          console.log ( 'error', err);
        }
      )
  }

}

