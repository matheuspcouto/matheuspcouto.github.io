import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetosComponent } from './projetos.component';

describe('ProjetosComponent', () => {
  let component: ProjetosComponent;
  let fixture: ComponentFixture<ProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com lista de projetos', () => {
    expect(component['projetos']).toBeDefined();
    expect(component['projetos'].length).toBeGreaterThan(0);
  });

  it('deve ter projetos com propriedades obrigatórias', () => {
    const projeto = component['projetos'][0];
    expect(projeto.titulo).toBeDefined();
    expect(projeto.descricao).toBeDefined();
    expect(projeto.tecnologias).toBeDefined();
    expect(projeto.url).toBeDefined();
    expect(projeto.imagem).toBeDefined();
    expect(Array.isArray(projeto.tecnologias)).toBe(true);
  });

  it('deve ter projeto Site IMEP', () => {
    const siteImep = component['projetos'].find(p => 
      p.titulo.toLowerCase().includes('site imep')
    );
    expect(siteImep).toBeDefined();
    expect(siteImep?.url).toContain('igrejametodistapalmas.vercel.app');
  });

  it('deve ter projeto Portfólio', () => {
    const portfolio = component['projetos'].find(p => 
      p.titulo.toLowerCase().includes('portfólio')
    );
    expect(portfolio).toBeDefined();
    expect(portfolio?.url).toContain('matheuspcouto-dev');
  });

  it('deve ter projeto IrrIot', () => {
    const irriot = component['projetos'].find(p => 
      p.titulo.toLowerCase().includes('irriot')
    );
    expect(irriot).toBeDefined();
    expect(irriot?.url).toContain('github.com');
  });

  it('deve abrir URL do projeto em nova aba', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const projeto = component['projetos'][0];
    
    component['irParaProjeto'](projeto);
    
    expect(spy).toHaveBeenCalledWith(projeto.url, '_blank');
    spy.mockRestore();
  });

  it('não deve abrir URL se projeto não tiver URL', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const projetoSemUrl = {
      titulo: 'Teste',
      descricao: 'Teste',
      tecnologias: [],
      url: '',
      imagem: ''
    };
    
    component['irParaProjeto'](projetoSemUrl);
    
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('deve ter pelo menos um projeto com Angular', () => {
    const projetoAngular = component['projetos'].find(p => 
      p.tecnologias.some(tech => tech.toLowerCase().includes('angular'))
    );
    expect(projetoAngular).toBeDefined();
  });
});