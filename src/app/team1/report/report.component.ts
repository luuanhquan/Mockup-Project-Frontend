import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
// import { type } from 'os';
import { Report } from '../model/report';
import { ReportService } from '../service/report.service';
import { NgForm } from '@angular/forms';
import { Project } from '../model/project.model';
import { CommonModule } from '@angular/common';
import { report } from 'process';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: 'report.component.html'
})

export class ReportComponent implements OnInit, OnDestroy {
  public reports: Report[];
  public readrequest: Report;
  public project: Project[] = [];
  private active_project;

  changeItem(id: number) {
    this.active_project=id;
    this.getReport(id);
  }


  constructor(private reportService: ReportService) { }
  ngOnInit(): void {
    this.getProject();
  }

  public getReport(id: number): void {
    this.reportService.getReport(id).subscribe(
      (response: Report[]) => {
        this.reports = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public writeReport(report: Report): void {
    this.reportService.readReport(report).subscribe(
      (response: Report) => {
        console.log(report);
        this.getReport(this.active_project);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(report: Report, node: string): void {
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

