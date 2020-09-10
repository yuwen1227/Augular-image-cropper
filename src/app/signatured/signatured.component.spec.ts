import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturedComponent } from './signatured.component';

describe('SignaturedComponent', () => {
  let component: SignaturedComponent;
  let fixture: ComponentFixture<SignaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
