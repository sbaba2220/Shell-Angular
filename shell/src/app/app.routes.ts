import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './LoginComponent'
    }).then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './RegisterComponent'
    }).then(m => m.RegisterComponent)
  },
  {
    path: 'home',
    loadComponent: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      type: 'module',
      exposedModule: './HomeComponent'
    }).then(m => m.HomeComponent)
  },
];
