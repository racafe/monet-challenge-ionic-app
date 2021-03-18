import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  phoneForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.phoneForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
    });
  }

  makePost() {
    this.http.post('https://httpbin.org/post', { phone: this.phoneForm.controls.phone.value }).subscribe((res) => {
      this.router.navigate(['idnow']);
    });
  }
}
