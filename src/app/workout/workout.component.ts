import { Component, OnInit } from '@angular/core';
import { UnitTime } from '../_model/unittime';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutService } from './workout.service';
@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  pageTitle: 'Create workout'
  model: any = {};
  userId: number;
  errorMessage: string;
  public unittimes: UnitTime[] = [
    { "id": 1, "unittime": "HOUR" },
    { "id": 2, "unittime": "MINUTE" },
    { "id": 3, "unittime": "SECOND" }
  ];
  public selectedUnitTime: UnitTime = this.unittimes[0];
  constructor(private router: Router, private route: ActivatedRoute, private workoutService: WorkoutService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('userId');
    this.userId = Number(param);

  }

  workout() {
    alert(this.model.title)
    alert(this.model.calBurntPerUnitTime)
    this.model.unitTime = this.selectedUnitTime.unittime;
    this.model.userId = this.userId;
    alert(this.userId)
    this.workoutService.createWorkout(this.model).subscribe(response => {


    },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);

      });

  }

  onSelect(unittimeId) {
    this.selectedUnitTime = null;
    for (var i = 0; i < this.unittimes.length; i++) {
      if (this.unittimes[i].id == unittimeId) {
        this.selectedUnitTime = this.unittimes[i];
      }
    }
  }

}
