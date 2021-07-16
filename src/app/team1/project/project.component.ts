import { Input, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { projectSummary } from "../../project.model";


@Component({
  templateUrl: "project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  constructor() {}

  pSummary: projectSummary[] = [
    {
      id: 1,
      thumbnail: "https://htland.vn/wp-content/uploads/2019/08/cong-du-an-phuc-an-garden-binh-duong-1024x523.jpg",
      titleProject: "dự án team1",
      tenDonVi: "itsol",
      tongQuanDuAn: "websang xịn mịn",
      tienDoDuAn: 50,
      bugProject: 30,
      tongNhanVien: 15,
      nowPhase: "demo",
      userName:'NMT',
      dateRegistered:'11/30/2020',
      role:'Member'
    },
    {
      id: 2,
      thumbnail: "https://htland.vn/wp-content/uploads/2019/08/cong-du-an-phuc-an-garden-binh-duong-1024x523.jpg",
      titleProject: "dự án team2",
      tenDonVi: "itsol",
      tongQuanDuAn: "websang xịn mịn",
      tienDoDuAn: 3,
      bugProject: 3,
      tongNhanVien:3,
      nowPhase: "demo",
      userName:'NQT',
      dateRegistered:'11/11/2020',
      role:'Member'
    },
  ];

  ngOnInit(): void {}
}
