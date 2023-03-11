import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <style>
      div {
        background-color: #808090;
        max-height: 4.37rem;
      }
    </style>

  <div> 
    <img src="../assets/images/logo.png" alt="gip.policybanao.com" width="180" height="70">
  </div>`,
})

export class HeaderComponent {

  constructor() {  }

  ngOnInit() { }

}

