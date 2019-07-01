import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendListComponent } from './lend-list.component';

describe('LendListComponent', () => {
  let component: LendListComponent;
  let fixture: ComponentFixture<LendListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
