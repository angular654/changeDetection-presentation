import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPresenterComponent } from './async-presenter.component';

describe('AsyncPresenterComponent', () => {
  let component: AsyncPresenterComponent;
  let fixture: ComponentFixture<AsyncPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncPresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
