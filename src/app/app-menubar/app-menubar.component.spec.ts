import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenubarComponent } from './app-menubar.component';

describe('AppMenubarComponent', () => {
  let component: AppMenubarComponent;
  let fixture: ComponentFixture<AppMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
