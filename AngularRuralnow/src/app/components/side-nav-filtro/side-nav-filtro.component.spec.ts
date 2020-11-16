import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFiltroComponent } from './side-nav-filtro.component';

describe('SideNavFiltroComponent', () => {
  let component: SideNavFiltroComponent;
  let fixture: ComponentFixture<SideNavFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
