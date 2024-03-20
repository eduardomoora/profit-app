import { TestBed } from '@angular/core/testing';

import { ProfitService } from './profit.service';

describe('ProfitService', () => {
  let service: ProfitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should calculate maximum profit correctly', () => {
    service.calculateProfit();
    service.profitResultValue$.subscribe(result => {
      expect(result?.maxProfitCalculated).toBe(170);
      expect(result?.buyIndexPrice).toBe(1);
      expect(result?.sellIndexPrice).toBe(2);
    });
  });

  it('should update profit result correctly', () => {
    const mockProfit = {
      maxProfitCalculated: 170,
      buyIndexPrice: 1,
      sellIndexPrice: 2,
      listPrices: [2500, 30, 200, 100, 6, 3]
    };
    service['setValuesProfit'](mockProfit);
    service.profitResultValue$.subscribe(result => {
      expect(result).toEqual(mockProfit);
    });
  });
});
