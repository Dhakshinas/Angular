import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:any=[];

  constructor(public data:DataService , private route: Router) { }

  ngOnInit(): void {

      this.data.getAll().subscribe((data)=>{
        this.users = data;
        console.log(this.users)
      })

  }



}
