import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: false,
  
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent implements OnInit {

  pieChartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [89, 34, 48, 54, 28, 74, 93],
      label: 'Sales Percent',
      backgroundColor: [
        'rgba(255, 0, 25, 0.7)',
          'rgba(0, 255, 25, 0.7)',
          'rgba(0, 25, 255, 0.7)',
          'rgba(67, 25, 255, 0.7)',
          'rgba(67, 25, 78, 0.7)',
          'rgba(167,125, 78, 0.7)',
          'rgba(67, 255, 178, 0.7)',
      ]
    }
  ]
}
pieChartOption = {
  responsive: false
}
constructor() {}

ngOnInit(): void {
  
}
}
