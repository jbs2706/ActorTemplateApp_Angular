import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenListComponent } from './projecten-list.component';

describe('ProjectenListComponent', () => {
  let component: ProjectenListComponent;
  let fixture: ComponentFixture<ProjectenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
