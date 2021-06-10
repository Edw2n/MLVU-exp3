import './Question.css';
import React from 'react';
import * as d3 from 'd3';
import 'react-bootstrap';
import Attribution from './Attribution.js';

function Question({number,setAnswer,rootDir}) {
  let ids = Array.from(Array(9).keys());

  React.useEffect(() => {


    async function drawGrid() {
      // TODO draw the map using d3
      const svg = d3
      .selectAll(`#Options_${number}`);
      let w = 90;
      let h = 90;

      function itemClick(){
        d3
          .select(this)
          .classed('clicked',!d3.select(this).classed('clicked'))
          
        setAnswer(number, d3.select(this).data()[0]+1)
        
      }  

      svg
        .attr("preserveAspectRatio", "xMinYMin meet")
        .style("background-color", "transparent")
        .attr("viewBox", `0 0 ${w} ${h}`)
        .classed("svg-content", true)
        .selectAll('*').remove();

        svg.append("defs")
        .selectAll("pattern")
        .data(ids)
        .enter()
        .append('pattern')
        .attr("id", (d)=>`img_${number}_${d}`)
        .attr("width","100%")
        .attr('height',"100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("height","1") // value is ratio : "image height /pattern height"
        .attr("width","1") // value is ratio : "image widht /pattern width"
        .attr("xlink:href", // use square size image
            (d)=>`${rootDir}/options/option${d+1}.png`);

      svg.append('g')
      .selectAll('rect')
      .data(ids)
      .enter()
      .append('rect')
      .attr('id', (d) => `rect_${number}_${d}`)
      .attr('x', (d) => parseInt(d/3)*30+1)
      .attr('y', (d) => (d % 3) * 30+1)
      .attr('width', 28)
      .attr('height', 28)
      .style("fill", // use square size image
                (d)=>`url(#img_${number}_${d})`)
      .on('click', itemClick)
    };
    drawGrid();

  },[]);
  return (
    <div className="Question">
      <div className='Question-Title'>
        <text className='Question-Text'>Question {number}</text>
      </div>
      <div className='Container'>
      <Attribution number={number} rootDir={rootDir}></Attribution>
        <div className="Option-box">
          <svg id={'Options_'+number} className='Options'></svg>
        </div>
      </div>
    </div>
  );
}

export default Question;
