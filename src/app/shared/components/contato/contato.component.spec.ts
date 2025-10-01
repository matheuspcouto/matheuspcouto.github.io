import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';

describe('ContatoComponent', () => {
  let component: ContatoComponent;
  let fixture: ComponentFixture<ContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com campos vazios', () => {
    expect(component['form'].controls.nome.value).toBe('');
    expect(component['form'].controls.email.value).toBe('');
    expect(component['form'].controls.mensagem.value).toBe('');
  });

  it('deve enviar formulário quando válido', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    
    // Preencher o formulário
    component['form'].controls.nome.setValue('João Silva');
    component['form'].controls.email.setValue('joao@email.com');
    component['form'].controls.mensagem.setValue('Olá, esta é uma mensagem de teste');
    
    component['enviarFormulario']();
    
    expect(spy).toHaveBeenCalledWith(
      'mailto:matheuspcouto70@gmail.com?cc=João Silva&subject=joao@email.com&body=Olá, esta é uma mensagem de teste',
      '_blank'
    );
    
    spy.mockRestore();
  });

  it('não deve enviar formulário quando inválido', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    
    // Deixar campos vazios para tornar o formulário inválido
    component['form'].controls.nome.setValue('');
    component['form'].controls.email.setValue('');
    component['form'].controls.mensagem.setValue('');
    
    component['enviarFormulario']();
    
    expect(spy).not.toHaveBeenCalled();
    
    spy.mockRestore();
  });
});