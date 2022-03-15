import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabasesupportService} from "../databasesupport.service";
@Component({
  selector: 'app-employeeeditinformationpage',
  templateUrl: './employeeeditinformationpage.component.html',
  styleUrls: ['./employeeeditinformationpage.component.scss']
})
export class EmployeeeditinformationpageComponent implements OnInit {
  employeeedit:any;
  idnumber:any;
  message:any;
  constructor(private service:DatabasesupportService, private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.employeeedit={"id":"","username":"","firstname":"","lastname":"aaaaaaaaaaaaa","email":"","birthdate":"","basicsalary":"","status":"","groupkaryawan":"","description":"","createdat":""};
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.idnumber = id;
    });
    let resps=this.service.editemployeeinformation(this.idnumber);
    resps.subscribe((data)=> {this.employeeedit=data;});

  }
  public employeeinformationupdate(value:any){
    let resp=this.service.editemployeeinformationupdate(value,this.idnumber);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['employeelistpage']);

  }
}
