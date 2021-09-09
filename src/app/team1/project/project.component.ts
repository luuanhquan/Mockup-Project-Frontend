import {Component, OnInit} from '@angular/core';
import {Project} from '../_model/project.model';
import {HttpErrorResponse} from '@angular/common/http';

import {ProjectService} from '../_service/project.service';
import {Router} from '@angular/router';
import {FormControl, NgForm} from '@angular/forms';
import {Project2Model} from '../_model/project2.model';

declare var $: any;

@Component({
  templateUrl: 'project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  public projectList: Project[];


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

  hideModalEdit(): void {
    document.getElementById('close-ModalEdit').click();
  }

  selectModel: Project;
  message: string = '';

  showModalDelete(model: Project): void {
    this.selectModel = model;
    this.message = model.name;
    console.log(this.message);
    $('#modal-delete').modal('show');
  }

  selectModelEdit: Project;
  showModalEdit(modelEdit: Project): void {
    this.selectModelEdit = modelEdit;
    this.message = modelEdit.name;
    console.log(this.selectModelEdit);
    $('#modal-edit').modal('show');
  }

  public addProject(addForm: NgForm): void {
    this.projectService.createProject(addForm.value).subscribe(
      () => {
        this.getProject();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public DeleteProject() {
    this.projectService.deleteProject(this.selectModel.id).subscribe(data => {
      console.log(this.selectModel.id);
    });
    window.location.reload();
  }

  public updateSummit(editForm:NgForm): void {
    // this.selectModelEdit=editForm.value;
    // this.setModel2(this.selectModelEdit);
    this.projectService.updateProject(this.selectModelEdit.id,editForm.value).subscribe(
      () => {
        this.getProject();
        window.location.reload();
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  // selectModel2:Project2Model;
  // setModel2(project:Project){
  //   this.selectModel2.id=project.id;
  //   this.selectModel2.name = project.name;
  //   this.selectModel2.description = project.description;
  //   this.selectModel2.date_start = project.dateStated;
  //   this.selectModel2.date_end = project.dateEnded;
  // }

}
