import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent implements OnInit{
bars=false;
constructor(){}
ngOnInit() {
  
}
MenuClick(){
  if(this.bars==true){
   this.bars= false;
  }else{
    this.bars=true;
  }
 /* this.bars?true:false;*/
 }
}
