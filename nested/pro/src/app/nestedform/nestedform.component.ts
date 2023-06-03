import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedFormComponent implements OnInit {
  personalForm!: FormGroup;

  edit1: any;
  edit2: any;
  edit3: any;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      personalDetails: this.formBuilder.group({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@bajajfinserv\.in$/), Validators.maxLength(10) && Validators.minLength(10)]],
        phone: ['88988', [Validators.required, Validators.pattern("[7-9]{10}")]],
      }),

      addressForm: this.formBuilder.group({
        houseNo: [''],
        street: [''],
        city: [''],
        state: [''],
      }),


      personal_info: this.formBuilder.group({
        collage: [''],
        cgpa: [''],
        branch: [''],
        job_role: [''],
        Interests: [''],
      })

    });
  }


  store() {
    console.log(this.personalForm.value);
    this.edit1 = this.personalForm.value.personalDetails;
    this.edit2 = this.personalForm.value.addressForm;
    this.edit3 = this.personalForm.value.personal_info;



    var f = this.personalForm.value.personalDetails.name;
    var g = this.personalForm.value.personalDetails.gender;
    var d = this.personalForm.value.personalDetails.dob;
    var e = this.personalForm.value.personalDetails.email;
    var n = this.personalForm.value.personalDetails.phone;

    var o = this.personalForm.value.addressForm.houseNo;
    var c = this.personalForm.value.addressForm.street;
    var s = this.personalForm.value.addressForm.city;
    var a = this.personalForm.value.addressForm.state;

    var b = this.personalForm.value.personal_info.collage;
    var x = this.personalForm.value.personal_info.cgpa;
    var y = this.personalForm.value.personal_info.branch;
    var z = this.personalForm.value.personal_info.job_role;
    var k = this.personalForm.value.personal_info.Interests;

    // localStorage.setItem('name', JSON.stringify(f));
    // localStorage.setItem('gender', JSON.stringify(g));
    // localStorage.setItem('dob', JSON.stringify(d));
    // localStorage.setItem('email', JSON.stringify(e));
    // localStorage.setItem('number', JSON.stringify(n));
    // localStorage.setItem('houseNo', JSON.stringify(o));
    // localStorage.setItem('street', JSON.stringify(c));
    // localStorage.setItem('city', JSON.stringify(s));
    // localStorage.setItem('state', JSON.stringify(a));
    // localStorage.setItem('collage', JSON.stringify(b));
    // localStorage.setItem('cgpa', JSON.stringify(x));
    // localStorage.setItem('branch', JSON.stringify(y));
    // localStorage.setItem('job_role', JSON.stringify(z));
    // localStorage.setItem('Interests', JSON.stringify(k));

    const data=JSON.stringify(this.personalForm.value)
    localStorage.setItem('A1',data)




    // localStorage.setItem('personalForm', JSON.stringify(this.personalForm.value));
    this.personalForm.reset()
  }
  // onjobRoleChange($event) {
  //   console.log($event);
  //   // this.job_role.setValue(e.target.value, {
  //   //   onlySelf: true
  //   // })
  // }
  // public isEmailValid(){

  //   console.log (this.personalForm.controls['personalDetails'].get("email"));
  // }

  edit() {
    this.personalForm.controls['personalDetails'].patchValue({
      name: this.edit1.name,
      gender: this.edit1.gender,
      dob: this.edit1.dob,
      email: this.edit1.email,
      phone: this.edit1.phone,
    })

    this.personalForm.controls['addressForm'].patchValue({
      houseNo: this.edit2.houseNo,
      street: this.edit2.street,
      city: this.edit2.city,
      state: this.edit2.state,
    })

    this.personalForm.controls['personal_info'].patchValue({
      collage: this.edit3.collage,
      cgpa: this.edit3.cgpa,
      branch: this.edit3.branch,
      job_role: this.edit3.job_role,
      Interests: this.edit3.Interests,
    })
  }
}

