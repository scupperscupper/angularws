import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppMenubarComponent} from './app-menubar/app-menubar.component';
import {routingComponents, routes} from './app-routing.component';
import {
  MatMenuModule, MatIconModule, MatButtonModule,
  MatTooltipModule, MatToolbarModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MAT_DATE_LOCALE
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {RegisterationComponent} from './registeration/registeration.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';



@NgModule({
  declarations: [
    AppComponent,
    AppMenubarComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
//  {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


