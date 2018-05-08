import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsssideNavComponent } from './cssside-nav.component';

describe('CsssideNavComponent', () => {
  let component: CsssideNavComponent;
  let fixture: ComponentFixture<CsssideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsssideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsssideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
