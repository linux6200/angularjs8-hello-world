import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoJSComponent } from './go-js.component';

describe('GoJSComponent', () => {
  let component: GoJSComponent;
  let fixture: ComponentFixture<GoJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
