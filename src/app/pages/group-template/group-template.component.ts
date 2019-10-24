import { Component, OnInit } from '@angular/core';
import { GroupTemplate } from 'src/app/models/groupTemplate.model';
import { GroupTemplateService } from 'src/app/services/service.index';

@Component({
  selector: 'app-group-template',
  templateUrl: './group-template.component.html',
  styleUrls: ['./group-template.component.css']
})
export class GroupTemplateComponent implements OnInit {

  groupTemplate:GroupTemplate = new GroupTemplate();

  constructor(
    private _groupTemplate: GroupTemplateService
  ) { }

  ngOnInit() {
  }

  load() {
    this._groupTemplate.get ( this.groupTemplate )
      .subscribe (
        response => {
          console.log ( response );
          this.groupTemplate = response.message;
        },
        err => {
          console.log ( err );
        }
      );


  }

  save() {
    this._groupTemplate.save ( this.groupTemplate )
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
    this._groupTemplate.update ( this.groupTemplate )
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
    this._groupTemplate.getList ( this.groupTemplate.idSchool )
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
