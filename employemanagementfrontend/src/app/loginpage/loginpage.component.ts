import { Component, OnInit } from '@angular/core';
import {DatabasesupportService} from "../databasesupport.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  message:any;
  constructor(private service:DatabasesupportService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  loginformsubmit(value:any){
    let resp=this.service.loginformsubmitdata(value);
    resp.subscribe((data)=>{
      window.alert(data);
    });
  }
}
