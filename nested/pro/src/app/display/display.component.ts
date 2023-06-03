import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 data:any
  // f: any
  // g: any
  // d: any
  // e: any
  // n: any
  // o: any
  // c: any
  // s: any
  // a: any
  // b: any
  // x: any
  // p: any
  // y: any
  // z: any
  // k: any

  constructor() { }

  ngOnInit(): void {
    this.get()
  }
  get() {
    const data=localStorage.getItem('A1')
    this.data=JSON.parse(data)




    // this.f=localStorage.getItem('name')
    // this.f=JSON.parse(this.f)
    // this.g=localStorage.getItem('gender')
    // this.g=JSON.parse(this.g)
    // this.d=localStorage.getItem('dob')
    // this.d=JSON.parse(this.d)
    // this.e=localStorage.getItem('email')
    // this.e=JSON.parse(this.e)
    // this.n=localStorage.getItem('phoneNo')
    // this.n=JSON.parse(this.n)
    // this.o=localStorage.getItem('houseNo')
    // this.o=JSON.parse(this.o)
    // this.c=localStorage.getItem('street')
    // this.c=JSON.parse(this.c)
    // this.s=localStorage.getItem('city')
    // this.s=JSON.parse(this.s)
    // this.a=localStorage.getItem('state')
    // this.a=JSON.parse(this.a)
    // this.b=localStorage.getItem('collage')
    // this.b=JSON.parse(this.b)
    // this.x=localStorage.getItem('cgpa')
    // this.y=localStorage.getItem('branch')
    // this.y=JSON.parse(this.y)
    // this.z=localStorage.getItem('job_role')
    // this.z=JSON.parse(this.z)
    // this.k=localStorage.getItem('Interests')
    // this.k=JSON.parse(this.k)

  }



}
