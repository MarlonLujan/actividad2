import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarUsuariosComponent } from './formulario-agregar-usuarios.component';

describe('FormularioAgregarUsuariosComponent', () => {
  let component: FormularioAgregarUsuariosComponent;
  let fixture: ComponentFixture<FormularioAgregarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAgregarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAgregarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
