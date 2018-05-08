import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSideNavComponent } from './html-side-nav.component';

describe('HtmlSideNavComponent', () => {
  let component: HtmlSideNavComponent;
  let fixture: ComponentFixture<HtmlSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
