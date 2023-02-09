import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogoComponent } from './menu-logo.component';

describe('MenuLogoComponent', () => {
  let component: MenuLogoComponent;
  let fixture: ComponentFixture<MenuLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
