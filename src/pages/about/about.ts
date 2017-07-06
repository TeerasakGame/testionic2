import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  pet: string = "plan";
  isAndroid: boolean = false;
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform) {
    console.log(this.navParams.get('id'));
    this.id = this.navParams.get('id');
    this.isAndroid = platform.is('android');
    //console.log(this.isAndroid + '   '+ platform.is('android'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
