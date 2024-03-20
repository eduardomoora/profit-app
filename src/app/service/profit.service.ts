import { Injectable } from '@angular/core';
import { Profit } from '../models/profit.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfitService {
  // You can change or add any numbers into the array and run it will works
  private _pricesPerDayList: number[] = [2500, 30, 200, 6, 100, 3];
  private _profitResult: BehaviorSubject<Profit | null> =
    new BehaviorSubject<Profit | null>(null);
  public profitResultValue$: Observable<Profit | null> =
    this._profitResult.asObservable();

  constructor() {}


  calculateProfit(): void {
    let minPrice = this._pricesPerDayList[0];
    let maxProfitCalculated = 0;
    let buyIndexPrice = 0;
    let sellIndexPrice = 0;

    // Iteration through prices array
    for (let i = 1; i < this._pricesPerDayList.length; i++) {
      // define price from current index
      const currentPrice = this._pricesPerDayList[i];

      // Here we will compare to check the potential profit
      const potentialProfit = currentPrice - minPrice;

      // If the potentialProfit is greater than maxProfitCalculated, it updates maxProfitCalculated with the potentialProfit
      if (potentialProfit > maxProfitCalculated) {
        maxProfitCalculated = potentialProfit;
        sellIndexPrice = i;
        // We find the index of the index to buy
        buyIndexPrice = this._pricesPerDayList.indexOf(minPrice);
      }
     // Compare current price should be lower and minPrice if get inside of that condition we add a new minPrice
      if (currentPrice < minPrice) {
        minPrice = currentPrice;
      }
    }

   // we update the values to be available from the next page route the values are in a service
    this.setValuesProfit({
      maxProfitCalculated,
      buyIndexPrice,
      sellIndexPrice,
      listPrices: [...this._pricesPerDayList]
    });
  }

  private setValuesProfit(profit: Profit): void {
    this._profitResult.next(profit);
  }

}
