import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProfitService } from '../../service/profit.service';

@Component({
  selector: 'app-calculate-profit',
  standalone: true,
  imports: [RouterModule],
  template: `<button class="calculate-button" (click)="calculateProfit()">
    Continue
  </button>`,
  styleUrl: './calculate-profit.component.scss',
})
export class CalculateProfitComponent {
  private _router: Router = inject(Router);
  private _profitService: ProfitService = inject(ProfitService);

  public calculateProfit(): void {
    this._profitService.calculateProfit();
    this._router.navigate(['result']);
  }
}
