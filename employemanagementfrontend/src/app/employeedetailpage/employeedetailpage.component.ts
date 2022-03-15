import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DatabasesupportService } from '../databasesupport.service';

@Component({
  selector: 'app-employeedetailpage',
  templateUrl: './employeedetailpage.component.html',
  styleUrls: ['./employeedetailpage.component.scss']
})
export class EmployeedetailpageComponent implements OnInit {
  employeedetail:any;
  constructor(private route: ActivatedRoute,private service:DatabasesupportService,private router:Router) { }

  ngOnInit(): void {
    this.employeedetail={"id":"","username":"","firstname":"","lastname":"aaaaaaaaaaaaa","email":"","birthdate":"","basicsalary":"","status":"","groupkaryawan":"","description":"","createdat":""};
    this.route.paramMap.subscribe((p:ParamMap)=>{
      var id = p.get('id');
      let idvalue = Number(id);
      let resp=this.service.editemployeeinformation(idvalue);
      resp.subscribe((data)=>this.employeedetail=data);
    }
    )
  }
  public employeeinformationback(){
    this.router.navigate(['employeelistpage']);
  }
}
