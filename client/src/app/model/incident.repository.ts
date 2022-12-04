import { Injectable } from "@angular/core";
import { Book } from "./book.model";
import { Incident } from "./incident.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class IncidentRepository {
    private incidents: Incident[] = [];
    private authors: any[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getIncidents().subscribe(data => {
            this.incidents = data;
            this.authors = data.map(a => a.author)
                .filter((a, index, array) => array.indexOf(a) === index).sort();
        });
    }

    getIncidents(author: any = null): Incident[] {
        return this.incidents
            .filter(a => author == null || author === a.author);
    }

    getIncident(id: number): any {
        return this.incidents.find(i => i._id === id);
    }

    saveIncident(savedIncident: Incident): void {
        if (savedIncident._id === null || savedIncident._id === 0 || savedIncident._id === undefined) {
            this.dataSource.addIncident(savedIncident).subscribe(b => {
                this.incidents.push(savedIncident);
            });
        }
        else {
            this.dataSource.updateIncident(savedIncident).subscribe(book => {
                this.incidents.splice(this.incidents.findIndex(b => b._id === savedIncident._id), 1, savedIncident);
            });
        }
    }

    deleteIncident(deletedIncidentID: number): void {
        this.dataSource.deleteBook(deletedIncidentID).subscribe(incident => {
            this.incidents.splice(this.incidents.findIndex(i => i._id === deletedIncidentID), 1);
        });
    }

    getAuthors(): string[] {
        return this.authors;
    }


}