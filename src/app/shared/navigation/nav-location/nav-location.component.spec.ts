import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLocationComponent } from './nav-location.component';

describe('NavBarComponent', () => {
  let component: NavLocationComponent;
  let fixture: ComponentFixture<NavLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
