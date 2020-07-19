import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolComponent } from './main-tool.component';

describe('MainToolComponent', () => {
  let component: MainToolComponent;
  let fixture: ComponentFixture<MainToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
