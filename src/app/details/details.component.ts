import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService} from '../data.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  users:any=[];

  constructor( private Data: DataService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.Data.getData(this.route.snapshot.paramMap.get('pid')).subscribe((data)=>{
      this.users = data;
      console.log(this.users)
    })
    
  }



}
