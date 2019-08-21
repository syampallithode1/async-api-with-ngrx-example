import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1ContainerComponent } from './demo1-container.component';

describe('Demo1ContainerComponent', () => {
  let component: Demo1ContainerComponent;
  let fixture: ComponentFixture<Demo1ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
