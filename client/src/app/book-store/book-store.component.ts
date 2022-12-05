import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from './../model/book.repository';

import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent
{
  public selectedAuthor = null;
  public incidentsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: IncidentRepository,
      private router: Router) { }

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

  changePage(newPage?: any): void {
    this.selectedPage = newPage;
  }

  changePageSize(newSize?: number): void {
    this.incidentsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getIncidents(this.selectedAuthor).length / this.incidentsPerPage);
  }
}
