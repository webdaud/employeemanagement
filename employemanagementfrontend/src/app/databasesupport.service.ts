import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabasesupportService {
  public iddelete:number=0;
  constructor(private http:HttpClient) { }
  public ListEmployee(){
    return this.http.get("http://localhost:8080/employee");
  }
  public editemployeeinformation(id: number){
    return this.http.get("http://localhost:8080/employee/edit/"+id);
  }
  public editemployeeinformationupdate(employee:any,id: number){
    return this.http.post("http://localhost:8080/employee/edit/"+id,employee,{responseType:"text" as 'json'});
  }
  public employeeinformationinsert(employee:any){
    return this.http.post("http://localhost:8080/employee/insert/",employee,{responseType:"text" as 'json'});
  }
  public registrationformsubmitdata(user:any){
    return this.http.post("http://localhost:8080/register",user,{responseType:"text" as 'json'});
  }
  public loginformsubmitdata(user:any){
    return this.http.post("http://localhost:8080/login",user,{responseType:"text" as 'json'});
  }
  public Listemployeeinformationdeleteconfirmation(id:any){
    this.iddelete = id;
    return 1;
  }
  public employeeinformationdelete(id:number){
    return this.http.delete("http://localhost:8080/employee/delete/"+id);
  }
}
