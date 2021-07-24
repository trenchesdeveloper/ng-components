import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
public data = [
  {
    name: 'James', age: 24, job: 'Designer', employed: true
  },
  {
    name: 'Jill', age: 26, job: 'Engineer',  employed: true
  }
  ,{
    name: 'Elyse', age: 25, job: 'Engineer', employed: false
  }
]

  public headers = [
    {key: 'employed', label: 'Have a Job?'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}