import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { AuthService } from './auth.service';
import { AuthGuard } from '../admin/auth/auth.guard';
import { IncidentRepository } from './incident.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [BookRepository, StaticDataSource, Cart, Order, OrderRepository, IncidentRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource, AuthService, AuthGuard]
})
export class ModelModule { }
