import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrioloTranslateComponent } from './criolo-translate.component';

describe('CrioloTranslateComponent', () => {
  let component: CrioloTranslateComponent;
  let fixture: ComponentFixture<CrioloTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrioloTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrioloTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
