import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumePipeComponent } from './custume-pipe.component';

describe('CustumePipeComponent', () => {
  let component: CustumePipeComponent;
  let fixture: ComponentFixture<CustumePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustumePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
