import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PequenioAnimalComponent } from './pequenioanimal.component';

describe('NavBarComponent', () => {
  let component: PequenioAnimalComponent;
  let fixture: ComponentFixture<PequenioAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PequenioAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PequenioAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
