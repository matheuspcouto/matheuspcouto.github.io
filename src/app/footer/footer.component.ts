import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socials: any[] =[];

  constructor() { }

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
        title: 'Phone Number',
        value: '+55 (63) 9 9201 - 4337',
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

  }

}
