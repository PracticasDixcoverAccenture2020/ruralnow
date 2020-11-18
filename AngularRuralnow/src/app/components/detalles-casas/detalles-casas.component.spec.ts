import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCasasComponent } from './detalles-casas.component';

describe('DetallesCasasComponent', () => {
  let component: DetallesCasasComponent;
  let fixture: ComponentFixture<DetallesCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
