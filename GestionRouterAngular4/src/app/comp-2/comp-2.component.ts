import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrls: ['./comp-2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => console.log(params.get('token'))); 
  }

}
