import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/service.index';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  public group: Group = new Group();
  public yearList: Array<number>;

  constructor(
    private _group: GroupService
  ) {
    var temp = new Date ().getFullYear() - 2;
    this.yearList = new Array<number>();
    
    for (let i = temp; i < ( temp + 5); i++) {
      this.yearList.push (i);
    }


  }

  ngOnInit() {
  }

  load() {
    this._group.get ( this.group )
      .subscribe (
        response => {
          console.log ( response );
          this.group = response.message;
        },
        err => {
          console.log ( err );
        }
      );


  }

  save() {
    this._group.save ( this.group )
      .subscribe (
        response => {
          console.log ( response );
        },
        err => {
          console.log ( err );
        }
      );


  }

  update() {
    this._group.update ( this.group )
      .subscribe (
        response => {
          console.log ( response );
        },
        err => {
          console.log ( err );
        }
      );


  }

  getList() {
    this._group.getList ( this.group.idSchool, this.group.year )
      .subscribe (
        response => {
          console.log ( response );
        },
        err => {
          console.log ( err );
        }
      );
  }



}
