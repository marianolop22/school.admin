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
    this.school.idUser = 123456;

    this._school.save ( this.school ).subscribe (
      response => {
        console.log ( response );
      },
      err => {
        console.log ( err.error.message.sqlMessage );
      }
    )
  }

  async uploadFile(event) {

    // this._school.uploadFile ( event.target.files[0], this.school.idSchool, 'front' )
    //   .then (
    //     response => {
    //       this.school.urlImage = response;
    //       this._school.updateMainImage ( this.school ).subscribe (
    //         response => {
    //           console.log ( 'urlimage ', response)
    //         }
    //       )
    //     }
    //   );

    this._school.uploadFile2 ( event.target.files[0], this.school.idSchool, 'front' )
      .pipe (
        finalize(() => { 
          this._school.fileRef.getDownloadURL().subscribe(
            response => {
              console.log ( 'url de respuesta',response );
              this.school.urlImage = response;
              this._school.updateMainImage ( this.school ).subscribe (
                response => {
                  console.log ( 'urlimage ', response)
                }
              )
            }
          )
        })
      ).subscribe ( response => {
        console.log ( 'respuesta', response );
      })





  }


  uploadShield(event) {

    this._school.uploadFile ( event.target.files[0], this.school.idSchool, 'shield' )
      .then (
        response => {
          this.school.urlShield = response;
          this._school.updateShieldImage ( this.school ).subscribe (
            response => {
              console.log ( 'shieldimage ', response)
            }
          )
        }
      );
    // this._school.uploadPercent.subscribe (
    //   response => {
    //     console.log ( response );
    //   }
    // )
  }

}

