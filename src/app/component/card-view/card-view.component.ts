import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
@Input() cardData;
@Input() currentState;
@Output () getSelectedData =new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
 showCurrentNotification(event,data){
  if(!this.currentState){
      this.getSelectedData.emit(data)
  }else{
    //event.preventdefault()
  }
  }

  closeCurrentCart(event){
    console.log(this.currentState )
    if(this.currentState === 'stackView'){
      console.log("step1")
      this.getSelectedData.emit('')
    }else{
      //event.preventdefault()
    }
  }

  checkPopUp(e){
    e.stopPropagation()
    alert('open')
    console.log('popUp')
  }
}
