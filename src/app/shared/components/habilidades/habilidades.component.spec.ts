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
    expect(component['habilidades'].length).toBe(6);
  });

  it('deve ter habilidades com propriedades obrigatórias', () => {
    const habilidade = component['habilidades'][0];
    expect(habilidade.titulo).toBeDefined();
    expect(habilidade.icone).toBeDefined();
    expect(habilidade.itens).toBeDefined();
    expect(Array.isArray(habilidade.itens)).toBe(true);
  });

  it('deve ter seção de Back-End', () => {
    const backEnd = component['habilidades'].find(h => h.titulo === 'Back-End');
    expect(backEnd).toBeDefined();
    expect(backEnd?.itens).toContain('> Java');
    expect(backEnd?.itens).toContain('> NodeJS');
  });

  it('deve ter seção de Front-End', () => {
    const frontEnd = component['habilidades'].find(h => h.titulo === 'Front-End');
    expect(frontEnd).toBeDefined();
    expect(frontEnd?.itens).toContain('> HTML & CSS');
    expect(frontEnd?.itens).toContain('- Angular');
  });

  it('deve ter seção de Banco de Dados', () => {
    const bancoDados = component['habilidades'].find(h => h.titulo === 'Banco de Dados');
    expect(bancoDados).toBeDefined();
    expect(bancoDados?.itens).toContain('> PostgreSQL');
    expect(bancoDados?.itens).toContain('> MongoDB');
  });

  it('deve ter seção de Testes', () => {
    const testes = component['habilidades'].find(h => h.titulo === 'Testes');
    expect(testes).toBeDefined();
    expect(testes?.itens).toContain('> Jest');
    expect(testes?.itens).toContain('> JUnit');
  });

  it('deve ter seção de DevOps & Agile', () => {
    const devops = component['habilidades'].find(h => h.titulo === 'DevOps & Agile');
    expect(devops).toBeDefined();
    expect(devops?.itens).toContain('> Git');
    expect(devops?.itens).toContain('> Azure');
  });

  it('deve ter seção de Idiomas', () => {
    const idiomas = component['habilidades'].find(h => h.titulo === 'Idiomas');
    expect(idiomas).toBeDefined();
    expect(idiomas?.itens).toContain('Inglês - Intermediário (B1)');
  });
});