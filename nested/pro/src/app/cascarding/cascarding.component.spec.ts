import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascardingComponent } from './cascarding.component';

describe('CascardingComponent', () => {
  let component: CascardingComponent;
  let fixture: ComponentFixture<CascardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
