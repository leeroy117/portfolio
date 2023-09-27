import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

type TSkills = {
  name: string,
  level: number
};

type TPersonalInformation = {
  birthday: {
    title: string,
    content: string
  },
  email:{
    title: string,
    content: string
  },
  phone:{
    title: string,
    content: string
  },
  nationality:{
    title: string,
    content: string
  },
  study:{
    title: string,
    content: string
  },
  freelance:{
    title: string,
    content: string
  }
}

type TKnowledgeAndInterests = {
  knowledge:{
    title: string
  },
  interests: {
    title: string,
    items: string[]
  }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // languageSkills: Array<TSkills> = [];
  // programmingSkills: Array<TSkills> = [];

  // programmingSkillsTitle = '';
  // languageSkillsTitle = '';
  // positionTitle = '';
  // personalInformation: TPersonalInformation = {
  //   birthday: {
  //     title: '',
  //     content: ''
  //   },
  //   email:{
  //     title: '',
  //     content: ''
  //   },
  //   phone:{
  //   title: '',
  //     content: ''
  //   },
  //   nationality:{
  //     title: '',
  //     content: ''
  //   },
  //   study:{
  //     title: '',
  //     content: ''
  //   },
  //   freelance:{
  //     title: '',
  //     content: ''
  //   }
  // }

  // knowledgeAndInterests: TKnowledgeAndInterests;

  // onDestroy$: Subject<void> = new Subject();

  // constructor(private translate: TranslateService){

  //   this.languageSkills = [
  //     {
  //       name:'English',
  //       level :60
  //     },
  //     {
  //       name:'Spanish',
  //       level :90
  //     },
  //   ];

  //   this.programmingSkills = [
  //     {
  //       name: 'Angular',
  //       level: 90
  //     },
  //     {
  //       name: 'Node JS',
  //       level: 80
  //     },
  //     {
  //       name: 'React',
  //       level: 70
  //     },
  //     {
  //       name: 'PHP',
  //       level: 80
  //     },
  //     {
  //       name: 'Nest JS',
  //       level: 80
  //     },
  //     {
  //       name: 'Express JS',
  //       level: 80
  //     },
  //     {
  //       name: 'MySql',
  //       level: 90
  //     },
  //     {
  //       name: 'Moodle',
  //       level: 80
  //     },
  //     {
  //       name: 'JavaScript',
  //       level: 90
  //     },
  //     {
  //       name: 'Bootstrap',
  //       level: 90
  //     },
  //     {
  //       name: 'Bulma',
  //       level: 80
  //     },
  //     {
  //       name: 'SCSS',
  //       level: 90
  //     },
  //     {
  //       name: 'Material',
  //       level: 90
  //     },

  //   ];

  // }

  // ngOnInit(){
  //   this.translate.get([
  //       'about',
  //     ]).subscribe(data => {
  //     this.programmingSkillsTitle = data.about.skills.programmingTitle;
  //     this.languageSkillsTitle = data.about.skills.languagesTitle;

  //     const personalInformation: TPersonalInformation = data.about.personalInformation;

  //     this.personalInformation.birthday = personalInformation.birthday;
  //     this.personalInformation.email = personalInformation.email;
  //     this.personalInformation.phone = personalInformation.phone;
  //     this.personalInformation.freelance = personalInformation.freelance;
  //     this.personalInformation.nationality = personalInformation.nationality;
  //     this.personalInformation.study = personalInformation.study;

  //     this.positionTitle = data.about.position;;

  //     const knowledgeAndInterests: TKnowledgeAndInterests = data.about.knowledgeAndInterests;

  //     this.knowledgeAndInterests = knowledgeAndInterests;
  //   });


  //   this.translate.onLangChange
  //   .pipe(
  //     takeUntil(this.onDestroy$)
  //   )
  //   .subscribe(langs => {
  //     this.positionTitle = langs.translations.about.position;

  //     this.programmingSkillsTitle = langs.translations.about.skills.programmingTitle;
  //     this.languageSkillsTitle = langs.translations.about.skills.languagesTitle;

  //     const personalInformation: TPersonalInformation = langs.translations.about.personalInformation;
  //     this.personalInformation.birthday = personalInformation.birthday;
  //     this.personalInformation.email = personalInformation.email;
  //     this.personalInformation.freelance = personalInformation.freelance;
  //     this.personalInformation.nationality = personalInformation.nationality;
  //     this.personalInformation.phone = personalInformation.phone;
  //     this.personalInformation.study = personalInformation.study;

  //     const knowledgeAndInterests: TKnowledgeAndInterests = langs.translations.about.knowledgeAndInterests;
  //     this.knowledgeAndInterests = knowledgeAndInterests;
  //   });

  // }
}
