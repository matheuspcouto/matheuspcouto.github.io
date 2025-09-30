import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { MpcLoaderService } from 'mpc-lib-angular';
import { of, Subject } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockRouter: jest.Mocked<Router>;
  let mockLoaderService: jest.Mocked<MpcLoaderService>;
  let routerEventsSubject: Subject<any>;

  beforeEach(async () => {
    routerEventsSubject = new Subject();
    
    mockRouter = {
      navigate: jest.fn(),
      events: routerEventsSubject.asObservable(),
      url: '/'
    } as any;

    mockLoaderService = {
      show: jest.fn(),
      hide: jest.fn(),
      isLoading: jest.fn()
    } as any;

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: MpcLoaderService, useValue: mockLoaderService },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter as abas de navegação configuradas', () => {
    expect(component['abas']).toBeDefined();
    expect(component['abas'].length).toBeGreaterThan(0);
  });

  it('deve chamar loaderService.show no ngOnInit', () => {
    component.ngOnInit();
    expect(mockLoaderService.show).toHaveBeenCalled();
  });

  it('deve chamar loaderService.hide após timeout', () => {
    jest.useFakeTimers();
    component.ngOnInit();
    
    jest.advanceTimersByTime(2000);
    
    expect(mockLoaderService.hide).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('deve fazer scroll para o topo quando NavigationEnd ocorrer no browser', () => {
    const scrollToSpy = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToSpy });
    
    component.ngOnInit();
    
    const navigationEnd = new NavigationEnd(1, '/', '/');
    routerEventsSubject.next(navigationEnd);
    
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('deve abrir WhatsApp em nova aba quando abrirWhatsApp for chamado no browser', () => {
    const openSpy = jest.fn();
    Object.defineProperty(window, 'open', { value: openSpy });
    
    component['abrirWhatsApp']();
    
    expect(openSpy).toHaveBeenCalledWith('https://wa.me/556392186293', '_blank');
  });

  describe('Cenários de plataforma server', () => {
    let serverComponent: AppComponent;
    let serverFixture: ComponentFixture<AppComponent>;
    let serverRouterEventsSubject: Subject<any>;
    let serverMockRouter: jest.Mocked<Router>;

    beforeEach(async () => {
      serverRouterEventsSubject = new Subject();
      
      serverMockRouter = {
        navigate: jest.fn(),
        events: serverRouterEventsSubject.asObservable(),
        url: '/'
      } as any;
      
      await TestBed.resetTestingModule();
      
      await TestBed.configureTestingModule({
        imports: [AppComponent],
        providers: [
          { provide: Router, useValue: serverMockRouter },
          { provide: MpcLoaderService, useValue: mockLoaderService },
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      }).compileComponents();

      serverFixture = TestBed.createComponent(AppComponent);
      serverComponent = serverFixture.componentInstance;
    });

    it('não deve fazer scroll quando não estiver no browser', () => {
      const scrollToSpy = jest.fn();
      Object.defineProperty(window, 'scrollTo', { value: scrollToSpy });
      
      serverComponent.ngOnInit();
      
      const navigationEnd = new NavigationEnd(1, '/', '/');
      serverRouterEventsSubject.next(navigationEnd);
      
      expect(scrollToSpy).not.toHaveBeenCalled();
    });

    it('não deve abrir WhatsApp quando não estiver no browser', () => {
      const openSpy = jest.fn();
      Object.defineProperty(window, 'open', { value: openSpy });
      
      serverComponent['abrirWhatsApp']();
      
      expect(openSpy).not.toHaveBeenCalled();
    });
  });
});
