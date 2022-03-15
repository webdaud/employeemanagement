import { Component, OnInit } from '@angular/core';
import { DatabasesupportService } from './../databasesupport.service';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-addemployeepage',
  templateUrl: './addemployeepage.component.html',
  styleUrls: ['./addemployeepage.component.scss']
})
export class AddemployeepageComponent implements OnInit {

  constructor(private service:DatabasesupportService, private route:ActivatedRoute,private router:Router) { }
  message:any;
  ngOnInit(): void {

  }
  public employeeinformationinsert(value:any){
    let resp=this.service.employeeinformationinsert(value);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['employeelistpage']);
  }
}
