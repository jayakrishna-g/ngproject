import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  profile ;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getdata().subscribe( (d) => {
      console.log(d);
      this.profile = d;
      alert(d);
    });
  }

}
