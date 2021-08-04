import {Component, OnInit} from '@angular/core';
import {Project} from '../_model/project.model'
import {HttpErrorResponse} from '@angular/common/http';

import {ProjectService} from '../_service/project.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Project2Model} from '../_model/project2.model';

declare var $: any;

@Component({
  templateUrl: 'project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  public projectList: Project[];
  public projectModel: Project2Model[];

  constructor(private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.getProject();
  }

  public getProject(): void {
    this.projectService.getProject().subscribe(
      (response) => {
        this.projectList = response;
        console.log(this.projectList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  showModal(): void {
    $('#myModal').modal('show');
  }

  hideModal(): void {
    document.getElementById('close-modal').click();
  }
  hideModalDelete(): void {
    document.getElementById('close-ModalDelete').click();
  }

  public addProject(addForm: NgForm): void {
    // document.getElementById('add-project-form').click();
    this.projectService.createProject(addForm.value).subscribe(
      (response: Project2Model) => {
        // console.log(response);
        this.getProject();
        addForm.reset();
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'block';
      },
      (error: HttpErrorResponse) => {
        alert('error.message');
        addForm.reset();
      }
    );
  }

  selectModel:Project;
  message: string ='';
  showModalDelete(model:Project): void{
    this.selectModel=model;
    this.message = this.selectModel.nameProject;
    console.log(this.message)
    console.log(this.selectModel);
    $('#modal-delete').modal('show');
  }

  public deleteProject():void{
    // this.projectService.deleteProject(id).subscribe(
    //   (response: void) => {
    //     console.log('response');
    //     this.getProject();
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // ); 
  }

  // deleteProject(id : number){
  //   this.projectService.deleteProject(id).subscribe (data =>{
  //     console.log(data)
  //     this.getProject();
  //   })
  // }
}
