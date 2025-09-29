import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter array de textos para digitação', () => {
    expect(component['textoDigitado']).toBeDefined();
    expect(Array.isArray(component['textoDigitado'])).toBe(true);
    expect(component['textoDigitado'].length).toBeGreaterThan(0);
  });

  it('deve ter "Hello World !" como texto inicial', () => {
    expect(component['textoDigitado']).toContain('Hello World !');
  });

  it('deve inicializar com índice 0', () => {
    expect(component['currentIndex']).toBe(0);
  });

  it('deve inicializar com texto vazio', () => {
    expect(component['currentText']).toBe('');
  });

  it('deve inicializar com isDeleting false', () => {
    expect(component['isDeleting']).toBe(false);
  });

  it('deve ter velocidades de digitação definidas', () => {
    expect(component['typeSpeed']).toBe(100);
    expect(component['deleteSpeed']).toBe(50);
    expect(component['pauseTime']).toBe(2000);
  });

  it('deve iniciar efeito de digitação no ngOnInit', () => {
    const spy = jest.spyOn(component as any, 'startTypingEffect');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('deve limpar timeout no ngOnDestroy', () => {
    // Reseta qualquer spy anterior
    jest.restoreAllMocks();
    
    const spy = jest.spyOn(global, 'clearTimeout');
    component['typedInstance'] = setTimeout(() => {}, 1000) as any;
    
    // Chama o método ngOnDestroy diretamente
    component.ngOnDestroy();
    
    expect(spy).toHaveBeenCalled();
  });

  it('não deve tentar limpar timeout se não existir', () => {
    // Reseta qualquer spy anterior
    jest.restoreAllMocks();
    
    const spy = jest.spyOn(global, 'clearTimeout');
    component['typedInstance'] = null;
    
    // Chama o método ngOnDestroy diretamente
    component.ngOnDestroy();
    
    expect(spy).not.toHaveBeenCalled();
  });

  describe('startTypingEffect', () => {
    beforeEach(() => {
      fixture.detectChanges(); // Garante que o ViewChild está inicializado
    });

    it('deve adicionar caracteres quando não estiver deletando', () => {
      component['currentText'] = 'Hell';
      component['currentIndex'] = 0;
      component['isDeleting'] = false;
      
      component['startTypingEffect']();
      
      expect(component['currentText']).toBe('Hello');
    });

    it('deve remover caracteres quando estiver deletando', () => {
      component['currentText'] = 'Hello';
      component['currentIndex'] = 0;
      component['isDeleting'] = true;
      
      component['startTypingEffect']();
      
      expect(component['currentText']).toBe('Hell');
    });

    it('deve mudar para modo de deletar quando texto completo for atingido', () => {
      component['currentText'] = 'Hello World !';
      component['currentIndex'] = 0;
      component['isDeleting'] = false;
      
      component['startTypingEffect']();
      
      expect(component['isDeleting']).toBe(true);
    });

    it('deve avançar para próximo texto quando deletar completamente', () => {
      const initialIndex = component['currentIndex'];
      component['currentText'] = '';
      component['isDeleting'] = true;
      
      component['startTypingEffect']();
      
      expect(component['isDeleting']).toBe(false);
      expect(component['currentIndex']).toBe((initialIndex + 1) % component['textoDigitado'].length);
    });

    it('deve atualizar o conteúdo do elemento', () => {
      component['currentText'] = 'Test';
      component['currentIndex'] = 0;
      component['isDeleting'] = false;
      
      const element = component['typedElement'].nativeElement;
      const initialContent = element.textContent;
      
      component['startTypingEffect']();
      
      expect(element.textContent).not.toBe(initialContent);
      expect(element.textContent).toBe(component['currentText']);
    });
  });
});