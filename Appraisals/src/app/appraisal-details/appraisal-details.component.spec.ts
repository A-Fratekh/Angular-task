import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalDetailsComponent } from './appraisal-details.component';

describe('AppraisalDetailsComponent', () => {
  let component: AppraisalDetailsComponent;
  let fixture: ComponentFixture<AppraisalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppraisalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppraisalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
