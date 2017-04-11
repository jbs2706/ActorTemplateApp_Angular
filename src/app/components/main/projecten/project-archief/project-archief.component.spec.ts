import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArchiefComponent } from './project-archief.component';

describe('ProjectArchiefComponent', () => {
  let component: ProjectArchiefComponent;
  let fixture: ComponentFixture<ProjectArchiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectArchiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectArchiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
