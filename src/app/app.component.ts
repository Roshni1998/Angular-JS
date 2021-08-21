import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "";

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz";
    this.imgUrl = "../assets/BL_logo_square_png.png";
  }
}


