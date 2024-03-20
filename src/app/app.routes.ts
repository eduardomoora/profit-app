import { Routes } from '@angular/router';
import { CalculateProfitComponent } from './views/calculate-profit/calculate-profit.component';
import { ResultComponent } from './views/result/result.component';

export const routes: Routes = [ {
  path: 'home', component: CalculateProfitComponent },
{ path: 'result', component: ResultComponent  },
{ path: '', redirectTo: '/home', pathMatch: 'full' },];
