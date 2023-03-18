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
    <!-- <h1>gip.policybanao.com</h1> -->
    <img src="../assets/images/logo.png" alt="gip.policybanao.com" width="240" height="80">
  </div>`,
})

export class HeaderComponent {

  constructor() {  }

  ngOnInit() { }

}

