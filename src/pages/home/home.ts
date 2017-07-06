import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Camera]
})

export class HomePage {
  aboutPage = AboutPage;
  mapPage = MapPage;
  constructor(public navCtrl: NavController,private camera: Camera) {

  }

  openPage(val){
    console.log(val);
    this.navCtrl.push(AboutPage,{id:val});
  }

  takepic(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(base64Image);
    }, (err) => {
     // Handle error
    });
  }

}
