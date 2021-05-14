import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyszukiwarkaComponent } from './wyszukiwarka.component';

describe('EmployeeComponent', () => {
  let component: WyszukiwarkaComponent;
  let fixture: ComponentFixture<WyszukiwarkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyszukiwarkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WyszukiwarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
