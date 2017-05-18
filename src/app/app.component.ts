import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <div class="simpleD3"></div>
  <svg id="circle-sample" style="fill: steelblue;"></svg>
  `
})
export class AppComponent { 
  name = 'D3!'; 
  data = [32, 56, 112, 293];
  
  ngOnInit(){
    d3.select("div.simpleD3")
      .selectAll("p")
      .data(this.data)
      .enter()
      .append("p")
      .text("new Paragraph");
    
    d3.select("svg#circle-sample")
      .selectAll("circle")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("cy", 60)
      .attr("cx", function(d, i){ return i * 100 + 30; })
      .attr("r", function(d){ return Math.sqrt(d); });
  }
}