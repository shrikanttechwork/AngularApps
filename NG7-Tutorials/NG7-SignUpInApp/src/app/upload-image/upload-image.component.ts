import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  imageUrl = '/assets/img/default-image.png';
  fileToUpload: File = null;
  // element: HTMLElement;
  // @Input() shrUserName: string;
  // @ViewChild(HomeComponent) home;
  hdnusername: string;
  constructor(private userService: UserService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  handelFileInput(file: FileList) {
    if (file.item(0)) {
      this.fileToUpload = file.item(0);
      // show image preview
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(this.fileToUpload);
    } else {
      this.imageUrl = '/assets/img/default-image.png';
    }
  }

  OnSubmit(Caption, Image, ImageName) {
    this.spinner.show();
    // const hdnUserName = localStorage.getItem('UserName');
    // this.hdnusername = this.home.username;
    this.userService.currentMessage.subscribe(message => this.hdnusername = message);
    const hdnUserName = this.hdnusername;
    this.userService.postFile(hdnUserName, Caption.value, this.fileToUpload).subscribe(
      data => {
        console.log('done');
        Caption.value = null;
        Image.value = null;
        ImageName.value = null;
        this.imageUrl = '/assets/img/default-image.png';
        this.spinner.hide();
      }
    );
  }
}
