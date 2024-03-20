import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculateProfitComponent } from './calculate-profit.component';
import { ProfitService } from '../../service/profit.service';
import { Router } from '@angular/router';

describe('CalculateProfitComponent', () => {
  let component: CalculateProfitComponent;
  let fixture: ComponentFixture<CalculateProfitComponent>;
  let profitService: ProfitService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateProfitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateProfitComponent);
    component = fixture.componentInstance;
    profitService = TestBed.inject(ProfitService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call calculateProfit method in profitService and navigate to result', () => {
    const calculateProfitSpy = spyOn(profitService, 'calculateProfit').and.callThrough();
    const navigateSpy = spyOn(router, 'navigate');
    component.calculateProfit();
    expect(calculateProfitSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['result']);
  });
});
