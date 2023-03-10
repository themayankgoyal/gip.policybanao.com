import { Component } from '@angular/core';
import addPolicyData from '../../assets/datafiles/addPolicy.json';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  items: any[];
  form: FormGroup;

  constructor(private router: Router, private fb:FormBuilder) {  }

  ngOnInit(){

    // this.getAddPolicyTablesData();
    debugger
    // var json = JSON.stringify(addPolicyData.policyTables);
    this.addPolicyTable = JSON.parse(JSON.stringify(addPolicyData.policyTables));
    this.createItems();

    this.form = this.fb.group({
      fName:[null, Validators.required]
    })

    this.countries = [
      {name: 'Alto', code: 'AU'},
      {name: 'Xcent', code: 'BR'},
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

  createItems(){
    this.items = [
      {label: 'General Information'},
      {label: 'Policy Information'},
      {label: 'Schedule of Premum'},
      {label: 'Commission Calculation'},
      {label: 'Documents Upload'}
      
  ];
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
