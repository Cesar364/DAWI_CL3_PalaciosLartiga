import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercico1Component } from './ejercico1.component';

describe('Ejercico1Component', () => {
  let component: Ejercico1Component;
  let fixture: ComponentFixture<Ejercico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercico1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
