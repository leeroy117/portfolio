import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

type TContact = {
  title: string,
  buttonText: string
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;


  contact: TContact ={
    title: 'Contact',
    buttonText: 'Send message',
  }

  onDestroy$: Subject<void> = new Subject();

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ){
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9.,!?'"()\s]{5,}$/)])
    })
  }

  ngOnInit(){

    this.translate.get(['contact']).subscribe(data => {
      // console.log("🚀 ~ file: contact.component.ts:24 ~ ContactComponent ~ this.translate.get ~ data:", data)
      this.contact = data.contact;
    });

    this.translate.onLangChange
    .pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe(langs => {
      this.contact = langs.translations.contact;
    });

  }

  onSubmit(){
    // console.log('form', this.contactForm.get('email')?.dirty);
    // console.log('form', this.contactForm.get('email')?.valid);

  }
}
