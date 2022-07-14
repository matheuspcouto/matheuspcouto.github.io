import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socials: any[] =[];
  email: any;
  subject: any;
  message: any;
  year: number = new Date().getFullYear();

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getSocials();
  }

  getSocials(){
    this.socials = [
      {
        title: 'E-mail',
        value: 'matheuspcouto70@gmail.com',
        class: 'email',
        icon: 'icofont-envelope'
      },
      {
        title: 'Telefone',
        value: '(63) 9 9201 - 4337',
        class: 'phone',
        icon: 'icofont-phone'
      },
      {
        title: 'Github',
        value: 'github.com/matheuspcouto',
        class: 'phone',
        icon: 'bx bxl-github'
      },
      {
        title: 'Linkedin',
        value: 'in/matheuspcouto',
        class: 'phone',
        icon: 'bx bxl-linkedin'
      },
    ]
  }

  enviarEmail(){
    var link = "mailto:matheuspcouto70@gmail.com"
               + "?cc=" + this.email
               + "&subject=" + this.subject
               + "&body=" + this.message;

     window.location.href = link;

     this.toastr.success("E-mail enviado com sucesso !");
  }

}
