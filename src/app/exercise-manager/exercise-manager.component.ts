import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-manager',
  templateUrl: './exercise-manager.component.html',
  styleUrls: ['./exercise-manager.component.css']
})
export class ExerciseManagerComponent implements OnInit {
  Name:string;
  e_date:Date;
  Description:string;
  e_dur:number;
  e_reps:number;
  e_cat:string;
  eList:any;
  eObject:any;


  constructor() {
    this.Name='';
    this.e_date=new Date();
    this.Description='';
    this.e_cat='';
    this.eList=[];
  }
  addItem(Exercise){
    this.eObject={
      id:this.eList.length+1,
      Name:this.Name,
      e_date:this.e_date,
      Description:this.Description,
      e_dur:this.e_dur,
      e_reps:this.e_reps,
      e_cat:this.e_cat,
    }
    this.eList.push(this.eObject)
    this.Name='';
    this.e_date=new Date();
    this.Description='';
    this.e_cat='';
    Exercise.preventDefault();
  }
  ngOnInit(): void {
  }

}
