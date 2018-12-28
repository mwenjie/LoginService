import { trigger, state, transition, style, animate} from '@angular/animations';
import { Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [
        trigger('slideInOut', [
          state('in', style({
            transform: 'translate3d(0, 0, 0)'
          })),
          state('out', style({
            transform: 'translate3d(100%, 0, 0)'
          })),
          transition('in => out', animate('400ms ease-in-out')),
          transition('out => in', animate('400ms ease-in-out'))
        ]),
      ]
})
 
export class LoginComponent implements OnInit {
    form: FormGroup;
    form2fa: FormGroup;
    model: any = {};
    loading = false;
    returnUrl: string;
    isLeftVisible = true;
 
    constructor(fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
        this.form = fb.group({
            "username": ["", [Validators.required
                , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            "password": ["", [Validators.required
                , Validators.minLength(8)]]
        })

        this.form2fa = fb.group({
            "code": ["", [Validators.required]]
        })
    }
 
    ngOnInit() {
    }
 
    login() {
    }

    get password() { return this.form.get('password'); }

    get username() { return this.form.get('username'); }

    get code() { return this.form2fa.get('code'); }

    onCodeSubmit() {
    }
}