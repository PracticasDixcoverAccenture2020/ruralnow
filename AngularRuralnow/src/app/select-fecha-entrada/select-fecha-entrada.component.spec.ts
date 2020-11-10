import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFechaEntradaComponent } from './select-fecha-entrada.component';

describe('SelectFechaEntradaComponent', () => {
  let component: SelectFechaEntradaComponent;
  let fixture: ComponentFixture<SelectFechaEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFechaEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFechaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
