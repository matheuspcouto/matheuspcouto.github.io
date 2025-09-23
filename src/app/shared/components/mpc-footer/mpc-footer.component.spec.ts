
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MpcFooterComponent } from './mpc-footer.component';

describe('MpcFooterComponent', () => {
  let component: MpcFooterComponent;
  let fixture: ComponentFixture<MpcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpcFooterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });
});
