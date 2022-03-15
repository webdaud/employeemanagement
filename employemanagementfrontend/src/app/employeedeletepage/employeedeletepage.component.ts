import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabasesupportService} from "../databasesupport.service";

@Component({
  selector: 'app-employeedeletepage',
  templateUrl: './employeedeletepage.component.html',
  styleUrls: ['./employeedeletepage.component.scss']
})
export class EmployeedeletepageComponent implements OnInit {

  constructor(private service:DatabasesupportService, private route:ActivatedRoute,private router:Router) { }
  public name:string='';
  employee:any;
  idnumber:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.idnumber = id;
    });
  }
  public employeedeleteinformation(){
    let resp=this.service.employeeinformationdelete(this.idnumber);
    resp.subscribe((data)=>{
      this.router.navigate(['employeelistpage']);
    });

  }
}
