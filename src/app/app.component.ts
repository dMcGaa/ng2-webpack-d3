import { Component } from '@angular/core';
import * as d3 from 'd3';
//import 'd3-scale';
//import 'd3-axis';
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
    const w = 900,
      h = 400,
      axisOffestBottom = 40;
    vis.attr("width", w)
      .attr("height", h);
    
    var yScale = d3.scaleLinear()
    .domain([0, 50])
    .range([h, 0]);
    
    const xScale = d3.scaleLinear()
    .domain([68, 84])
    .range([10, w-10])
    
    const cirRad = 4;
      
    vis.text("The Graph")
      .select("#graph");
    
    const axisL = d3.axisLeft(yScale);
    const axisB = d3.axisBottom(xScale);
    
    var div = vis.append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);
      
    vis.selectAll("circle .cars")
      .data(AUTOMPG)
      .enter()
      .append("svg:circle")
      .attr("class", ".cars")
      .attr("cy", function(d) {
        return yScale(d.miles.gallon); 
      })
      .attr("cx", function(d, i) { return xScale(d["model year"]); })
      .attr("r", `${cirRad}px`)
      .attr("fill", "black")
      .append("svg:title")
      .text(function(d) { return `${d["car name"]}:${d.miles.gallon}`; }); 
  
    vis.append("g")
      .attr("transform", `translate(0,${h - axisOffestBottom + 20})`)
      .call(axisB);
      
    vis.append("g")
      .attr("transform", `translate(30,${0})`)
      .call(axisL);  }
}