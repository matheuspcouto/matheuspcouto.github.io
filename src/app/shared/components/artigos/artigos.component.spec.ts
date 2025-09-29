import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtigosComponent } from './artigos.component';

describe('ArtigosComponent', () => {
  let component: ArtigosComponent;
  let fixture: ComponentFixture<ArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com lista de artigos', () => {
    expect(component['artigos']).toBeDefined();
    expect(component['artigos'].length).toBeGreaterThan(0);
  });

  it('deve ter artigo com propriedades obrigatórias', () => {
    const artigo = component['artigos'][0];
    expect(artigo.titulo).toBeDefined();
    expect(artigo.dataPublicacao).toBeDefined();
    expect(artigo.revista).toBeDefined();
    expect(artigo.url).toBeDefined();
    expect(artigo.issn).toBeDefined();
  });

  it('deve abrir link do artigo em nova aba', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const url = 'https://test.com';
    
    component['irParaArtigo'](url);
    
    expect(spy).toHaveBeenCalledWith(url, '_blank');
    spy.mockRestore();
  });

  it('deve ter pelo menos um artigo sobre ergonomia', () => {
    const artigoErgonomia = component['artigos'].find(artigo => 
      artigo.titulo.toLowerCase().includes('ergonomic')
    );
    expect(artigoErgonomia).toBeDefined();
  });
});