import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

type TSidebar = {
  home: string,
  about: string,
  service: string,
  portfolio: string,
  contact: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  @ViewChild('toggleButton') toggleButton : ElementRef;

  language: string = '';

  onDestroy$: Subject<void> = new Subject();

  // home: string = '';
  sidebar: TSidebar = {
    home: '',
    about: '',
    service: '',
    portfolio: '',
    contact: ''
  }

  home: string = '';

  constructor(
                private translate: TranslateService,
                private route: ActivatedRoute
    ){

    }

  ngOnInit(){
    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('en');

    // this.translate.use('es').subscribe(response => {
    //   console.log("🚀 ~ file: app.component.ts:39 ~ AppComponent ~ this.translate.use ~ response:", response)
    //   this.sidebar.home = response.sidebar.home;
    //   this.sidebar.about = response.sidebar.about;
    //   this.sidebar.service = response.sidebar.service;
    //   this.sidebar.portfolio = response.sidebar.portfolio;
    //   this.sidebar.contact = response.sidebar.contact;
    // });

    this.translate.defaultLang == 'es' ? this.language = 'English' : this.language = 'Español';

    this.translate.get(['sidebar.home','sidebar.about','sidebar.service','sidebar.portfolio','sidebar.contact'])
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(langs => {
        // console.log("🚀 ~ file: app.component.ts:61 ~ AppComponent ~ ngOnInit ~ langs:", langs)
         this.sidebar.home = langs['sidebar.home'];
        	this.sidebar.about = langs['sidebar.about'];
        	this.sidebar.service = langs['sidebar.service'];
        	this.sidebar.portfolio = langs['sidebar.portfolio'];
        	this.sidebar.contact = langs['sidebar.contact'];

      })

      this.translate.onLangChange
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(langs => {
        // console.log("🚀 ~ file: app.component.ts:77 ~ AppComponent ~ ngOnInit ~ langs:", langs);

        (langs.lang == 'es') ? this.language = 'English' : this.language = 'Español' ;

        // console.log('this', this.language);


        this.sidebar.home = langs.translations.sidebar.home;
        this.sidebar.about = langs.translations.sidebar.about;
        this.sidebar.service = langs.translations.sidebar.service ;
        this.sidebar.portfolio = langs.translations.sidebar.portfolio;
        this.sidebar.contact = langs.translations.sidebar.contact;
      })

  }

  changeLang(){

    const currentLang = this.translate.currentLang;
    let newLenguage = currentLang;

    if (currentLang == 'es') {
      newLenguage = 'en';
      // this.language = 'English';
    }else{
      // this.language = 'Español'
      newLenguage = 'es';
    }

    // this.translate.setDefaultLang(newLenguage);

    this.translate.use(newLenguage);

  }


}
