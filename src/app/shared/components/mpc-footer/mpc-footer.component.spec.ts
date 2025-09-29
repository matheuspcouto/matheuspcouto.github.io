
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpcFooterComponent } from './mpc-footer.component';

describe('MpcFooterComponent', () => {
  let component: MpcFooterComponent;
  let fixture: ComponentFixture<MpcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpcFooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MpcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o footer corretamente', () => {
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });

  it('deve ser um componente standalone', () => {
    expect(component).toBeInstanceOf(MpcFooterComponent);
  });
});
