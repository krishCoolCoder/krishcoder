import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  headerLinks : any = [
    {headerText: "Home",headerLinks: "www.google.com"},
    {headerText: "Projects",headerLinks: "www.google.com"},
    {headerText: "Skills",headerLinks: "www.google.com"},
    {headerText: "About",headerLinks: "www.google.com"}];

    selectedItemNo ?: number = 0;
  selectedItem(i: any){
    this.selectedItemNo = i;
  }
  ngOnInit(): void {
  }

}
