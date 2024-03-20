import { Component, inject } from '@angular/core';
import { ProfitService } from '../../service/profit.service';
import { Observable } from 'rxjs';
import { Profit } from '../../models/profit.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  template: `   @if (profit$ | async; as profit) {
    <ul class="profit-list">
      <li>Best time to buy:  day {{profit.buyIndexPrice + 1 }}   price {{profit.listPrices[profit.buyIndexPrice]}}</li>
      <li>Best time to sell: day {{profit.sellIndexPrice + 1 }}  price {{profit.listPrices[profit.sellIndexPrice]}}</li>
      <li>Profit: {{profit.maxProfitCalculated}}</li>
    </ul>
  }`,
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  private _profitService: ProfitService = inject(ProfitService);
  public profit$: Observable<Profit| null> = this._profitService.profitResultValue$;
  constructor(){}
}
