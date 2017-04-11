import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorTemplateFormComponent } from './actor-template-form.component';

describe('ActorTemplateFormComponent', () => {
  let component: ActorTemplateFormComponent;
  let fixture: ComponentFixture<ActorTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
