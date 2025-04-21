import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForReviewComponent } from './for-review.component';

describe('ForReviewComponent', () => {
  let component: ForReviewComponent;
  let fixture: ComponentFixture<ForReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
