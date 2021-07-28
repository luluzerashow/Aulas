import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontAngular';
  result: boolean = true;

  ngOnInit(){
    var url = "";
    url = window.location.href;
    const link1 = "https://luluaulas-luizrudokas.vercel.app/login";
    const link2 = "https://luluaulas-luizrudokas.vercel.app/";
    // const link1 = "http://localhost:4200/login";
    // const link2 = "http://localhost:4200/";   
    if (url == link2) {
      this.result = true;
      console.log("link2")
    } else if(url == link1) {
      this.result = true;
      console.log("link1")
    }
    else{
      this.result = false;
      console.log("diferente")
    }  
  }
}
