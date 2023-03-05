import { Component } from '@angular/core';
import addPolicyData from '../../assets/datafiles/addPolicy.json';
import { Router } from '@angular/router';

@Component({
  selector: '[app-add-policy]',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent {
  isLoading: boolean = false;
  addPolicyTable: any[];
  selectedCountry: string;
  countries: any[];

  constructor(private router: Router) {  }

  ngOnInit(){

    // this.getAddPolicyTablesData();
    debugger
    // var json = JSON.stringify(addPolicyData.policyTables);
    this.addPolicyTable = JSON.parse(JSON.stringify(addPolicyData.policyTables));

    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];


  }
  navigateToHome(){
    this.router.navigate(['/dashboard']);
  }

  // createTableColumns(){
  //   this.addPolicyTableColumns = [
  //     { field: "addPolicyTable"}
  //   ]
  // }

  // getAddPolicyTablesData(){
  //   this.isLoading = false;
  //   this.addPolicyTable = [];
  //   let t = [];

  //   addPolicyData.policyTables

  // }

}
