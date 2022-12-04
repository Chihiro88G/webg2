import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';

@Component({
  selector: 'app-incident-editor',
  templateUrl: './incident-editor.component.html',
  styleUrls: ['./incident-editor.component.css']
})
export class IncidentEditorComponent implements OnInit {

  editing = false;
  incident: Incident = new Incident();

  constructor(private repository: IncidentRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';

    if (this.editing) {
      Object.assign(this.incident, repository.getIncident(activeRoute.snapshot.params['id']));
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm): void {
    this.repository.saveIncident(this.incident);
    this.router.navigateByUrl('/admin/main/incidents');
  }

}
