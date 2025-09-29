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
    const anoNascimento = 2000;
    const mesNascimento = 4; // Maio (0-indexado)
    const diaNascimento = 23;
    
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
      'https://www.canva.com/design/DAF-pR8ynQw/2daYc25BT31YuFiDKvtJjw/view',
      '_blank'
    );
    spy.mockRestore();
  });

  it('deve abrir currículo em inglês', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    
    component['verCurriculoEN']();
    
    expect(spy).toHaveBeenCalledWith(
      'https://www.canva.com/design/DAF-pdf-9Es/GB2dltpM5DV3zNJbiT4w6A/view',
      '_blank'
    );
    spy.mockRestore();
  });

  it('deve calcular idade baseada na data de nascimento 23/05/2000', () => {
    // Testando com diferentes datas para verificar o cálculo
    const hoje = new Date();
    const nascimento = new Date('2000-05-23');
    
    let idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
    
    if (mesAtual < mesNascimento || 
        (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
      idadeCalculada--;
    }
    
    expect(component['age']).toBe(idadeCalculada);
  });
});