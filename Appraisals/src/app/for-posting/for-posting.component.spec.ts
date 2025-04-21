import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPostingComponent } from './for-posting.component';

describe('ForPostingComponent', () => {
  let component: ForPostingComponent;
  let fixture: ComponentFixture<ForPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPostingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
