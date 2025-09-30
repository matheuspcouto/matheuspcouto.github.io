import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent } from 'mpc-lib-angular';

@Component({
    selector: 'contato',
    imports: [CommonModule, ReactiveFormsModule, MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent],
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

    private readonly formBuilder = inject(NonNullableFormBuilder);

    /**
     * Cria uma instância do componente ContatoComponent.
     * @param {FormBuilder} fb - Form builder para criar formulários reativos.
     */
    protected form = this.formBuilder.group({
        nome: [''],
        email: [''],
        mensagem: ['']
    });

    /**
     * Envia o formulário de contato.
     */
    protected enviarFormulario(): void {
        if (this.form.valid) {
            const link = "havylaferreira4@gmail.com"
                + "?cc=" + this.form.controls.nome.value
                + "&subject=" + this.form.controls.email.value
                + "&body=" + this.form.controls.mensagem.value;

            window.open('mailto:' + link, '_blank');
        }
    }
}