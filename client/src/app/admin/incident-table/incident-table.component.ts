import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';

@Component({
  selector: 'app-incident-table',
  templateUrl: './incident-table.component.html',
  styleUrls: ['./incident-table.component.css']
})
export class IncidentTableComponent implements OnInit {

  public selectedAuthor = null;
  public incidentsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: IncidentRepository,
    private router: Router) { }

  ngOnInit(): void {
  }

  changePageSize(newSize?: number): void {
    this.incidentsPerPage = Number(newSize);
    this.changePage(1);
  }

  changePage(newPage?: any): void {
    this.selectedPage = newPage;
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getIncidents(this.selectedAuthor).length / this.incidentsPerPage);
  }

  // getter for incidents
  get incidents(): Incident[] {
    const pageindex = (this.selectedPage - 1) * this.incidentsPerPage;

    return this.repository.getIncidents(this.selectedAuthor)
      .slice(pageindex, pageindex + this.incidentsPerPage);
  }

  get authors(): string[] {
    return this.repository.getAuthors();
  }

  changeAuthor(newAuthor?: any): void {
    this.selectedAuthor = newAuthor;
  }

  deleteIncident(id: number): void {
    if (confirm('Are you sure?') && (id !== undefined)) {
      this.repository.deleteIncident(id);
    }
    else {
      // window.location.reload(); // refresh fix
      this.router.navigateByUrl('/admin/main/incidents');
    }
  }

  addIncident(): void {
    this.router.navigateByUrl('/admin/main/incidents/add');
  }

  editIncident(id: number): void {
    console.log('inside edit incident');
    this.router.navigateByUrl('/admin/main/incidents/edit/' + id);
  }

}
