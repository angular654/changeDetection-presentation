import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrSampleComponent } from './cdr-sample.component';

describe('CdrSampleComponent', () => {
  let component: CdrSampleComponent;
  let fixture: ComponentFixture<CdrSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdrSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdrSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
