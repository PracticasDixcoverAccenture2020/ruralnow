import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFechaSalidaComponent } from './select-fecha-salida.component';

describe('SelectFechaSalidaComponent', () => {
  let component: SelectFechaSalidaComponent;
  let fixture: ComponentFixture<SelectFechaSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFechaSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFechaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
