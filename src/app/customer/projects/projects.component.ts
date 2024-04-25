import {Component, OnInit} from '@angular/core';
//import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  projects: any[] = [];
  projectsStatic: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects(){
   
  }

  searchWord = "";

  onSearchChange(event:any){
    this.searchWord = event.target.value;
    this.searchProject();
    console.log(this.projects);
    console.log(this.projectsStatic);
  }
  searchProject() {
    if (this.searchWord.trim() === '') {
      this.projects = this.projectsStatic.slice();
      return;
    }

    const searchFilter = (project: any) =>
      project.projectName.toLowerCase().includes(this.searchWord.toLowerCase());

    this.projects = this.projectsStatic.filter((project: any) => {
      const result = searchFilter(project);
      console.log(`Project: ${project.projectName}, Matched: ${result}`);
      return result;
    });
  }



}
