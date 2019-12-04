import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageSrc;
  imageURL;
  constructor() { }

  ngOnInit() {
  }
  readURL(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (event.target.files[0].type !== 'image/jpeg' && event.target.files[0].type !== 'image/png') {
       alert("File should be in PNG or JPEG format only");

      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageSrc =file // this is source data that we send towards backend through api
          this.imageURL = reader.result //for URL to show picture 
          // this.cd.markForCheck();
        };
      }


    }
  }
}
