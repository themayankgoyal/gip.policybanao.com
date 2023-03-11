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
        align-items:center ;
      }
      h3{
        padding-top: 1.1rem;
        color: white;
      }
    </style>

  <div> 
    <h3>@Copyright - Policy Banao since@1969</h3>
  </div>`,
})

export class FooterComponent {

  constructor() {  }

  ngOnInit() { }

}

