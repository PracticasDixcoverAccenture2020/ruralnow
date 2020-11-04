import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaListaComponent } from './casa-lista.component';

describe('CasaListaComponent', () => {
  let component: CasaListaComponent;
  let fixture: ComponentFixture<CasaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
