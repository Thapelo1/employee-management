import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmployeesComponent } from './detail-employees.component';

describe('DetailEmployeesComponent', () => {
  let component: DetailEmployeesComponent;
  let fixture: ComponentFixture<DetailEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEmployeesComponent]
    });
    fixture = TestBed.createComponent(DetailEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
