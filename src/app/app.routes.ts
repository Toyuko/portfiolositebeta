import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';

export const router: Routes = [
    { path: '', component: GalleryComponent }, 
    { path: 'project/:id', component: DetailsComponent }, 
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 