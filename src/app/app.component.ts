import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicAngular 2020';
  isShow = true;
  languages = ['C#','VB','Mean Stack','Angular','Test'];
  price = 2345.78;
  myDate = new Date();

  i:number = 0;
  public addCount(){
    this.i++;
  }
  showMessage(){
    return this.title;
  }

  readData(value){
    console.log(value);
  }
}
