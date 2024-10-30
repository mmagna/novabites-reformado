import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'andresjosehr-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{

    this.languageService.initLanguage()


    this.titleService.setTitle( "Nova Bites | Especialista en Software" );

    this.metaService.addTags([
      {name: 'keywords', content: 'software, developer, company'},
      {name: 'description', content: 'Somos una empresa dedica a crear tu idea en realidad, desarrollando sistemas, interfaces y soluciones tecnológicas para hacer de la web un lugar mejor. Nuestra pasión es conectar a las empresas con sus clientes a través de experiencias digitales inolvidables.'},
    ]);


    AOS.init();

  }
}
