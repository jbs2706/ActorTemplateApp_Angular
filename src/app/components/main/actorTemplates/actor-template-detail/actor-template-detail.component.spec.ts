import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorTemplateDetailComponent } from './actor-template-detail.component';

describe('ActorTemplateDetailComponent', () => {
  let component: ActorTemplateDetailComponent;
  let fixture: ComponentFixture<ActorTemplateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorTemplateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorTemplateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
