import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './NavigationBar.html',
  styleUrls: ['./NavigationBarStyle.css']
})
export class NavigationBarComponent {
  printHello() {
    console.log("hello")
  }
  
}