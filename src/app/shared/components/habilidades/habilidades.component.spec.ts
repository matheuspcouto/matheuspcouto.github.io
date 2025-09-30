import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabilidadesComponent } from './habilidades.component';

describe('HabilidadesComponent', () => {
  let component: HabilidadesComponent;
  let fixture: ComponentFixture<HabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilidadesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com lista de habilidades', () => {
    expect(component['habilidades']).toBeDefined();
    expect(component['habilidades'].length).toBe(5);
  });

  it('deve ter habilidades com propriedades obrigatórias', () => {
    const habilidade = component['habilidades'][0];
    expect(habilidade.titulo).toBeDefined();
    expect(habilidade.icone).toBeDefined();
    expect(habilidade.itens).toBeDefined();
    expect(Array.isArray(habilidade.itens)).toBe(true);
  });
});