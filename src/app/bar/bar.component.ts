import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: false,
  
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent implements OnInit {
 
  barChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [89, 34, 45, 54, 28, 74, 93],
        label: 'Sales Percent',
        backgroundColor: '#f88406'
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {
    
  }
}
