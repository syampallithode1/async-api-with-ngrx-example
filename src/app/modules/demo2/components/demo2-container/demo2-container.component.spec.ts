import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2ContainerComponent } from './demo2-container.component';

describe('Demo2ContainerComponent', () => {
  let component: Demo2ContainerComponent;
  let fixture: ComponentFixture<Demo2ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
