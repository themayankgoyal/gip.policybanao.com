import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <style>
      div {
        background-color: #808090;
        min-height: 3rem;
        max-height: 4.37rem;
        text-align: center;
        align-items:center;
        padding: 0%;
        margin: 0%;
      }
      h3{
        padding-top: 1.1rem;
        color: white;
      }
    </style>

  <div> 
    <h3>@copyright policybanao.com 2023</h3>
  </div>`,
})

export class FooterComponent {

  constructor() {  }

  ngOnInit() { }

}

