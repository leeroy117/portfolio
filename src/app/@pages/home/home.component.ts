import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // @ViewChild(NgxTypedJsComponent) typed: NgxTypedJsComponent;

  // jobPosition: string = '';
  // description: string = '';
  // programmingSkillsTitle = '';
  // languageSkillsTitle = '';
  // hobbies: string[];

  // onDestroy$: Subject<void> = new Subject();

  // constructor(
  //               private translate: TranslateService,
  //               private route: ActivatedRoute
  //             ){

  // }

  // ngOnInit(){
  //   this.translate
  //     .get(['home.description', 'home.jobPosition','home.hobbies'])
  //     .subscribe(data => {
  //       this.jobPosition = data['home.jobPosition'];
  //       this.description = data['home.description'];
  //       this.hobbies = data['home.hobbies']
  //     });


  //   this.translate.onLangChange
  //   .pipe(
  //     takeUntil(this.onDestroy$)
  //   )
  //   .subscribe(langs => {
  //     this.description = langs.translations.home.description;
  //     this.jobPosition = langs.translations.home.jobPosition;
  //     this.programmingSkillsTitle = langs.translations.about.skills.programmingTitle;
  //     this.languageSkillsTitle = langs.translations.about.skills.languagesTitle;
  //     this.hobbies = langs.translations.home.hobbies;
  //   })
  // }

}
