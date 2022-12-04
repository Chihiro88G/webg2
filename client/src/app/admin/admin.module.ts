import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { RegisterComponent } from "./register/register.component";
import { IncidentEditorComponent } from './incident-editor/incident-editor.component';
import { IncidentTableComponent } from './incident-table/incident-table.component';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'main', component: AdminComponent, canActivate: [AuthGuard],
        children: [
            // { path: 'orders', component: OrderTableComponent, data: { title: 'Order Table', canActivate: [AuthGuard] } },
            { path: 'incidents', component: IncidentTableComponent, data: { title: 'Incidents', canActivate: [AuthGuard] } },
            { path: 'incidents/:mode/:id', component: IncidentEditorComponent, data: { title: 'Edit Incident', canActivate: [AuthGuard] } },
            { path: 'incidents/:mode', component: IncidentEditorComponent, data: { title: 'Add Incident', canActivate: [AuthGuard] } },
            { path: '**', redirectTo: 'incidents' }
        ],
    },
    { path: '**', redirectTo: 'auth' },
])

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, routing],
    providers: [AuthGuard],
    // declarations: [AuthComponent, AdminComponent, OrderTableComponent, BookEditorComponent, BookTableComponent]
    declarations: [AuthComponent, AdminComponent, RegisterComponent, IncidentEditorComponent, IncidentTableComponent]
})
export class AdminModule { }