import { Input, OnInit, ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { Project } from "./project";
import { HttpErrorResponse }from '@angular/common/http';

import { ProjectService } from "./project.service";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import {Project2} from "./project2";

declare var $: any;
@Component({
  templateUrl: "project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  public project: Project[];
  
  constructor(private projectService: ProjectService,
    private router:Router) { }
  ngOnInit() {
    this.getProject();
  }
  
  public getProject(): void {
    this.projectService.getProject().subscribe(
      (response: Project[]) => {
        this.project = response;
        console.log(this.project);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  // public onOpen( project:Project,node:String):void{
  //     const con=document.getElementById('container');
  //     const button= document.createElement('button');
  //     button.type='button';
  //     button.setAttribute('data-toggle','modal')
  //     button.style.display='none';
  //     if(node==='add'){
  //       button.setAttribute('data-target','#addmodal')
  //     }
  //     con.appendChild(button);
  //     button.click;
  // }

  showModal():void {
    $("#myModal").modal('show');
  }

  hideModal():void {
    document.getElementById('close-modal').click();
  }


  public saveProject(addForm: NgForm): void {
    // document.getElementById('add-project-form').click();
    this.projectService.createProject(addForm.value).subscribe(
      (response: Project2) => {
        console.log(response);
        this.getProject();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
