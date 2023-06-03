import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login11Component } from './login11.component';

describe('Login11Component', () => {
  let component: Login11Component;
  let fixture: ComponentFixture<Login11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
