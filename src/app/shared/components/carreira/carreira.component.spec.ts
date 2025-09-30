import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreiraComponent } from './carreira.component';

describe('CarreiraComponent', () => {
  let component: CarreiraComponent;
  let fixture: ComponentFixture<CarreiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreiraComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CarreiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com lista de trabalhos', () => {
    expect(component['trabalhos']).toBeDefined();
    expect(component['trabalhos'].length).toBeGreaterThan(0);
  });

  it('deve ter abas definidas', () => {
    expect(component['abas']).toBeDefined();
    expect(component['abas'].length).toBe(2);
    expect(component['abas'][0].titulo).toBe('Profissional');
    expect(component['abas'][1].titulo).toBe('Acadêmica');
  });

  it('deve ter primeira aba selecionada por padrão', () => {
    expect(component['abaSelecionada']).toBeDefined();
    expect(component['abaSelecionada']?.id).toBe('experiencia-profissional');
  });

  it('deve ter trabalhos com propriedades obrigatórias', () => {
    const trabalho = component['trabalhos'][0];
    expect(trabalho.titulo).toBeDefined();
    expect(trabalho.periodo).toBeDefined();
    expect(trabalho.empresa).toBeDefined();
    expect(trabalho.atividades).toBeDefined();
    expect(Array.isArray(trabalho.atividades)).toBe(true);
  });
});