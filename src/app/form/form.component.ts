import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username!:string;
  @Output () searchOutput = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  submitUser(){
    this.searchOutput.emit(this.username);
    this.username = "";
  }

}
