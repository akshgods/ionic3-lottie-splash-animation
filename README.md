# ionic3-lottie-splash-animation
ionic3 with lottie and custom splash animation demo

git clone https://github.com/akshgods/ionic3-lottie-splash-animation
cd ionic3-lottie-splash-animation
npm i

If any thing not works, make blank ionic 3 project. replace this src,package.json,config.xml with blank project. 

For better understand splash custom animation go to 
https://angularfirebase.com/lessons/generate-a-custom-spash-screen-and-icons-in-ionic/

for ionic lottie documentaion :
https://www.npmjs.com/package/ng-lottie

#add callback for complete animation 

anim.addEventListener('complete', ()=>{
      this.complete();
  })

complete(){
      console.log('complete');
      if(login=='1')
      {
 this.navCtrl.setRoot(HomePage);
      }else{
 this.navCtrl.setRoot(TutorialPage);
      }
}
