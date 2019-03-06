import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  readonly rootUrl = 'http://localhost:59167';

  constructor(private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  registerUser(user: User, roles: string[]) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles: roles
    };
    const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/api/User/Register', body, { headers: reqHeader });
  }
  userAuthentication(userName, password) {
    const data = 'username=' + userName + '&password=' + password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }
  getUserClaims() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.rootUrl + '/api/User/GetUserClaims');
   }
   getAllRoles() {
    const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/Role/GetAllRoles', { headers: reqHeader });
  }
  roleMatch(allowedRoles: any): boolean {
    let isMatch: any = false;
    const userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
  postFile(hdnusername: string, caption: string, fileToUpload: File) {
    const endpoint = this.rootUrl + '/api/User/UploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    formData.append('hdnUserName', hdnusername);
    return this.http
      .post(endpoint, formData);
  }
}
