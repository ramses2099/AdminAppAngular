import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingrnavbarComponent } from './settingrnavbar.component';

describe('SettingrnavbarComponent', () => {
  let component: SettingrnavbarComponent;
  let fixture: ComponentFixture<SettingrnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingrnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingrnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
