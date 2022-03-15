import { Component, OnInit } from '@angular/core';
import {DatabasesupportService} from "../databasesupport.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.scss']
})
export class RegistrationpageComponent implements OnInit {

  constructor(private service:DatabasesupportService, private route:ActivatedRoute,private router:Router) { }
  message:any;
  ngOnInit(): void {
  }
  registrationformsubmit(value:any){
    let resp=this.service.registrationformsubmitdata(value);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['registrationfinishpage']);
  }

}
