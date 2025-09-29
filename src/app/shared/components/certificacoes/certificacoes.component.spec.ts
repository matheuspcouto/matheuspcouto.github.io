import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificacoesComponent } from './certificacoes.component';

describe('CertificacoesComponent', () => {
  let component: CertificacoesComponent;
  let fixture: ComponentFixture<CertificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificacoesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com lista de certificações', () => {
    expect(component['certificacoes']).toBeDefined();
    expect(component['certificacoes'].length).toBeGreaterThan(0);
  });

  it('deve inicializar com índice de certificados igual a 3', () => {
    expect(component['indiceCertificados']).toBe(3);
  });

  it('deve ter certificações com propriedades obrigatórias', () => {
    const certificacao = component['certificacoes'][0];
    expect(certificacao.titulo).toBeDefined();
    expect(certificacao.icone).toBeDefined();
    expect(certificacao.dataFinalizacao).toBeDefined();
  });

  it('deve aumentar índice de certificados em 3', () => {
    const indiceInicial = component['indiceCertificados'];
    component['aumentaIndiceCertificados']();
    expect(component['indiceCertificados']).toBe(indiceInicial + 3);
  });

  it('deve abrir link do certificado em nova aba quando URL existe', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const url = 'https://test.com';
    
    component['irParaCertificado'](url);
    
    expect(spy).toHaveBeenCalledWith(url, '_blank');
    spy.mockRestore();
  });

  it('não deve abrir link quando URL é undefined', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    
    component['irParaCertificado'](undefined);
    
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('deve ter certificação de Java', () => {
    const certificacaoJava = component['certificacoes'].find(cert => 
      cert.titulo.toLowerCase().includes('java')
    );
    expect(certificacaoJava).toBeDefined();
  });

  it('deve ter certificação de Spring Framework', () => {
    const certificacaoSpring = component['certificacoes'].find(cert => 
      cert.titulo.toLowerCase().includes('spring')
    );
    expect(certificacaoSpring).toBeDefined();
  });
});