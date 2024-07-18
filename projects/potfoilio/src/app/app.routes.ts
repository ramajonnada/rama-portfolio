import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{ component: HomeComponent, path: '' },
	{ component: HomeComponent, path: 'home' },
	{ component: ProjectsComponent, path: 'projects' },
];
