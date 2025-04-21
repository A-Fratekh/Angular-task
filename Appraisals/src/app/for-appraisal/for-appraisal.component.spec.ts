import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAppraisalComponent } from './for-appraisal.component';

describe('ForAppraisalComponent', () => {
  let component: ForAppraisalComponent;
  let fixture: ComponentFixture<ForAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForAppraisalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
