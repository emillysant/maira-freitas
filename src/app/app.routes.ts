import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FanAdminComponent } from './components/fan-admin/fan-admin.component';
import { CallbackComponent } from './components/callback/callback.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'tracks', component: CallbackComponent, title: 'Callback'},
    { path: 'fanadmin', component: FanAdminComponent, title: 'Fan Admin'} 
];
