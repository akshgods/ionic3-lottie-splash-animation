import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   lottieConfig: Object;
   anim: any;
   animationSpeed: number = 1;
  constructor(public navCtrl: NavController) {
    this.lottieConfig = {
      path: 'assets/swizzl_splash.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
}

stop() {
    this.anim.stop();
}

play() {
    this.anim.play();
}

pause() {
    this.anim.pause();
}

setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
}
}
