import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHuespedesComponent } from './select-huespedes.component';

describe('SelectHuespedesComponent', () => {
  let component: SelectHuespedesComponent;
  let fixture: ComponentFixture<SelectHuespedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHuespedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHuespedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
