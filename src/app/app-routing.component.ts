import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
        {
            path: '',
            component: HomeComponent,
        },
       {
            path: 'index',
            component: HomeComponent,
        },
       {
            path: 'vertebrates/birds',
            component: HomeComponent,
        },
       {
            path: 'vertebrates/mamals',
            component: HomeComponent,
        },
       {
            path: 'invertebrates/insects',
            component: HomeComponent,
        },
       {
            path: 'register',
            component: RegisterationComponent,
        },
       {
            path: 'login',
            component: HomeComponent,
        },
    ];

export const routingComponents = [RegisterationComponent, HomeComponent];

