import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TshirtDetailsComponent implements OnInit , OnChanges {

  @Input() tshirt;
  quantity=0;
  error=false;
  @Output() cancelevent=new EventEmitter();
  @Output() buyevent=new EventEmitter();

  ngOnChanges(): void{

  }

  buy(){
    
    if(this.quantity){
      if(this.quantity > this.tshirt.Instock){
        alert("Not Available");
      }
      else{
        console.log(this.tshirt);
        this.tshirt.Instock=this.tshirt.Instock-this.quantity;
        this.buyevent.emit(this.tshirt)
      }
    }

    
  }

  cancel(){
    this.cancelevent.emit(false);
  }

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

}
