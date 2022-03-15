import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DatabasesupportService } from './../databasesupport.service';
import {EmployeedeletepageComponent} from "../employeedeletepage/employeedeletepage.component";

@Component({
  selector: 'app-employelistpage',
  templateUrl: './employelistpage.component.html',
  styleUrls: ['./employelistpage.component.scss']
})
export class EmployelistpageComponent implements OnInit {
  employee:any;
  constructor(private service:DatabasesupportService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let resp=this.service.ListEmployee();
    resp.subscribe((data)=>this.employee=data);
  }
  public employeeinsertpagenavigate(){
    this.router.navigate(['addemployeepage']);
  }
  public employeedetailpagenavigate(id: number){
    this.router.navigate(['employeedetailpage/'+id]);
  }
  public employeeeditpagenavigate(id: number){
    this.router.navigate(['editinformation/'+id]);
  }
  public employeedeletepagenavigate(id: number){
    this.router.navigate(['deleteconfirmation/'+id]);
  }

}
