import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
// import { type } from 'os';
import { Request } from './request';
import { ReportService } from './request.service';
import { NgForm } from '@angular/forms';
import { Project } from './project.model';
import { CommonModule } from '@angular/common';
import { report } from 'process';
import { HttpErrorResponse } from '@angular/common/http';

export class RequestComponent implements OnInit, OnDestroy {
  public reports: Request[];
  public readrequest: Request;
  public project: Project[] = [];
  activeProject: number = 0;

  changeItem(id: number) {
    this.getReport(id);
  }


  constructor(private reportService: ReportService) { }
  ngOnInit(): void {
    Promise.resolve(this.getProject()).then(() => this.getReport(this.project[0].id));
  }

  public getReport(id: number): void {
    this.reportService.getReport(id).subscribe(
      (response: Request[]) => {
        this.reports = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public writeReport(report: Request): void {
    this.reportService.readReport(report).subscribe(
      (response: Request) => {
        console.log(report);
        this.getReport(this.activeProject);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(report: Request, node: string): void {
    const container = document.getElementById('reportWeek')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (node === 'read') {
      button.setAttribute('data-target', '#modalread')
    }
    if (node === 'report') {
      button.setAttribute('data-target', '#modalreport')

    }
    container.appendChild(button);
    button.click();

  }

  public getProject() {
    this.reportService.getProject().subscribe(
      (response: Project[]) => {
        this.project = response;
        console.log(response);
        console.log(this.project);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  status: { isOpen: boolean } = { isOpen: false };
  disabled: boolean = false;
  isDropup: boolean = true;
  autoClose: boolean = false;


  ngOnDestroy() {
    this.status.isOpen = false;
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  }

  change(value: boolean): void {
    this.status.isOpen = value;
  }

}


