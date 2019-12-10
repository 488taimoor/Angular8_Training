
import { Component, OnInit } from '@angular/core';
//to integrate chartjs with angular follow these steps
// fist install chart.js, angular2-charjs and hammarjs
// then go to angular.json file and in script array add the path .... 
// then enjoy chart
import {Chart} from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  myChart;
  constructor(){

  }
 ngOnInit(): void {


  var ctx = document.getElementById("myChart");
   this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3]
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          plugins: {
              zoom: {
                  // Container for pan options
                  pan: {
                      // Boolean to enable panning
                      enabled: true,
  
                      // Panning directions. Remove the appropriate direction to disable 
                      // Eg. 'y' would only allow panning in the y direction
                      mode: 'xy'
                  },
  
                  // Container for zoom options
                  zoom: {
                      // Boolean to enable zooming
                      enabled: true,
  
                      // Zooming directions. Remove the appropriate direction to disable 
                      // Eg. 'y' would only allow zooming in the y direction
                      mode: 'xy',
                  }
              }
          }
      }
  });
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
 resetZoom(){
   this.myChart.resetZoom()
 }
}
