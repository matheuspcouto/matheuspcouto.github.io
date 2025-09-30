import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreComponent } from './sobre.component';

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve calcular idade corretamente', () => {
    const agora = new Date();
    const anoNascimento = 1998;
    const mesNascimento = 9; // Outubro (0-indexado)
    const diaNascimento = 13;
    
    let idadeEsperada = agora.getFullYear() - anoNascimento;
    
    // Ajuste se ainda não fez aniversário este ano
    if (agora.getMonth() < mesNascimento || 
        (agora.getMonth() === mesNascimento && agora.getDate() < diaNascimento)) {
      idadeEsperada--;
    }
    
    expect(component['age']).toBe(idadeEsperada);
  });

  it('deve ter idade maior que 20 anos', () => {
    expect(component['age']).toBeGreaterThan(20);
  });

  it('deve abrir currículo em português', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    
    component['verCurriculoPT']();
    
    expect(spy).toHaveBeenCalledWith(
      'https://www.canva.com/design/DAGNTsZF9ZA/SlHnN155fRL0kkNLUhE2Xw/view',
      '_blank'
    );
    spy.mockRestore();
  });

  it('deve calcular idade baseada na data de nascimento 13/10/1998', () => {
    // Testando com diferentes datas para verificar o cálculo
    const hoje = new Date();
    const nascimento = new Date('1998-10-13');
    
    let idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
    
    if (mesAtual < mesNascimento || 
        (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
      idadeCalculada--;
    }
    
    expect(component['age']).toBe(idadeCalculada);
  });

  it('deve decrementar idade quando ainda não fez aniversário no ano', () => {
    // Mock de uma data antes do aniversário (1 de janeiro)
    const originalDate = Date;
    const mockDate = jest.fn().mockImplementation((dateString?: string) => {
      if (dateString) {
        return new originalDate(dateString);
      }
      return new originalDate('2024-01-01');
    });
    
    Object.setPrototypeOf(mockDate, originalDate);
    Object.defineProperty(mockDate, 'prototype', {
      value: originalDate.prototype,
      writable: false
    });
    
    global.Date = mockDate as any;

    // Criar novo componente com a data mockada
    const testComponent = new SobreComponent();
    
    // A idade deve ser 25 (2024 - 1998 - 1)
    expect(testComponent['age']).toBe(25);
    
    // Restaurar Date original
    global.Date = originalDate;
  });

  it('deve não decrementar idade quando já fez aniversário no ano', () => {
    // Mock de uma data após o aniversário (15 de outubro)
    const originalDate = Date;
    const mockDate = jest.fn().mockImplementation((dateString?: string) => {
      if (dateString) {
        return new originalDate(dateString);
      }
      return new originalDate('2024-10-15');
    });
    
    Object.setPrototypeOf(mockDate, originalDate);
    Object.defineProperty(mockDate, 'prototype', {
      value: originalDate.prototype,
      writable: false
    });
    
    global.Date = mockDate as any;

    // Criar novo componente com a data mockada
    const testComponent = new SobreComponent();
    
    // A idade deve ser 26 (2024 - 1998)
    expect(testComponent['age']).toBe(26);
    
    // Restaurar Date original
    global.Date = originalDate;
  });
});