import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit , OnDestroy{

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className='hold-transition skin-blue sidebar-mini';
  }

  ngOnDestroy(){
    document.body.className='';
  }
}
