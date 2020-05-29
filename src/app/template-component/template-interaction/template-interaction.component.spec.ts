import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInteractionComponent } from './template-interaction.component';

describe('TemplateInteractionComponent', () => {
  let component: TemplateInteractionComponent;
  let fixture: ComponentFixture<TemplateInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
