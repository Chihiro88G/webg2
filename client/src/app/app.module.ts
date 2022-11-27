import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreModule } from './book-store/book-store.module';
import { PagesModule } from './pages/pages.module';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { AuthComponent } from './admin/auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    // AuthComponent,
    // AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    PagesModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
