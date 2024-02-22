import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetaillesComponent } from './productdetailles.component';

describe('ProductdetaillesComponent', () => {
  let component: ProductdetaillesComponent;
  let fixture: ComponentFixture<ProductdetaillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetaillesComponent]
    });
    fixture = TestBed.createComponent(ProductdetaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
