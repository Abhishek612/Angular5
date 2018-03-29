import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivianComponent } from './olivian.component';

describe('OlivianComponent', () => {
  let component: OlivianComponent;
  let fixture: ComponentFixture<OlivianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlivianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlivianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
