import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{ component: ProjectsComponent, path: 'projects' },
	{ component: HomeComponent, path: '' },
	{ component: HomeComponent, path: 'home' },
];
