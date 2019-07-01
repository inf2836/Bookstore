import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendCreateComponent } from './lend-create.component';

describe('LendCreateComponent', () => {
  let component: LendCreateComponent;
  let fixture: ComponentFixture<LendCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
