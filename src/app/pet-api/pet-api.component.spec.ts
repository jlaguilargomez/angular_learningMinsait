import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetApiComponent } from './pet-api.component';

describe('PetApiComponent', () => {
  let component: PetApiComponent;
  let fixture: ComponentFixture<PetApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
