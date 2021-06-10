import './Question.css';
import React, { useState } from 'react';
import * as d3 from 'd3';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap';

function Attribution({number,rootDir}) {
  let ids = Array.from(Array(9).keys());
  const [value, setValue] = useState(1);

  let fvNameDict = {
    3 : 'basic_fv.png',
    4 : 'dataset_fv.png'
  }

  function setResult(event){

  }

  React.useEffect(() => {


    async function drawGrid() {
      // TODO draw the map using d3

      const attribution = d3
      .selectAll(`#attribution_${number}`);
      let attribution_spec = {
        w : 90,
        h: 80
      }

      attribution
        .attr("preserveAspectRatio", "xMinYMin meet")
        .style("background-color", "transparent")
        .attr("viewBox", `0 0 ${attribution_spec.w} ${attribution_spec.h}`)
        .classed("svg-content", true)
        .selectAll('*').remove();

      attribution
        .append("defs")
        .selectAll("pattern")
        .data(ids.slice(0,2))
        .enter()
        .append('pattern')
        .attr("id", (d)=>`att_${number}_${d}`)
        .attr("width","100%")
        .attr('height',"100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("height","1") // value is ratio : "image height /pattern height"
        .attr("width","1") // value is ratio : "image widht /pattern width"
        .attr("xlink:href", // use square size image
            (d)=>`${rootDir}/attribution/dataset-example${d+1}.png`);
      
        attribution
            .append("defs")
            .selectAll("pattern")
            .data(ids.slice(2,4))
            .enter()
            .append('pattern')
            .attr("id", (d)=>`att_${number}_${d}`)
            .attr("width","100%")
            .attr('height',"100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("height","1") // value is ratio : "image height /pattern height"
            .attr("width","1") // value is ratio : "image widht /pattern width"
            .attr("xlink:href", // use square size image
                (d)=>`${rootDir}/attribution/${fvNameDict[d+1]}`);

      attribution
      .append('g')
      .selectAll('rect')
      .data(ids.slice(0,4))
      .enter()
      .append('rect')
      .attr('id', (d) => `att_${number}_${d}`)
      .attr('x', (d) => 7+parseInt(d/2)*40)
      .attr('y', (d) => (d % 2) * 40)
      .attr('width', 38)
      .attr('height', 38)
      .style("fill", // use square size image
                (d)=>`url(#att_${number}_${d})`)
      .style('filter',`opacity(${value*20}%)`)
    };
    drawGrid();

  },[value]);
  return (
        <div className="Target-FV">
          <svg id={'attribution_'+number} className='attribution'></svg>
          <RangeSlider className='slider'
                value={value}
                min='1'
                max='5'
                variant='info'
                onChange={changeEvent => {
                    setValue(changeEvent.target.value)
                    setResult(number)
                }}
            />
        </div>
  );
}

export default Attribution;
