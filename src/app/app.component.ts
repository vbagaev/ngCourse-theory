import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

@ViewChild('form') form: NgForm;
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  formData = {

  };

  isSubmited = false;

submitForm(form: NgForm) {
  console.log('Submited!!', this.form);
  this.isSubmited = true;
  this.formData = this.form.value;
  this.form.reset();
}

   addRandEmail() {
  const randEmail = 'dsdgs@fdssd.rug';
  // this.form.setValue({
  //   user: {
  //     pass: '',
  //     email: randEmail
  //   },
  //   country: '',
  //   answer: ''
  // });
     this.form.form.patchValue(
       {
         user: {email: randEmail}
       }
     );
   }

}
