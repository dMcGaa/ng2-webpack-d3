import { Component } from '@angular/core';
import * as d3 from 'd3';
import AUTOMPG from './data/auto-mpg';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <div id="mpg-graph"></div>
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
      
    let vis = d3.select("#mpg-graph")
      .append("svg");
    const w = 900, h = 400;
    const gTick = w/AUTOMPG.length;
    vis.attr("width", w)
      .attr("height", h);
      
    vis.text("The Graph")
      .select("#graph");
      
    vis.selectAll("circle .cars")
     .data(AUTOMPG)
     .enter()
     .append("svg:circle")
     .attr("class", ".cars")
     .attr("cy", function(d) { return d.miles.gallon; })
     .attr("cx", function(d, i) { return i*gTick; })
     .attr("r", "2px")
     .attr("fill", "black");
  }
}