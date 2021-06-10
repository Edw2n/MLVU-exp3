import logo from './logo.svg';
import React from 'react';
import * as d3 from 'd3';

function OptionBox(props) {

    React.useEffect(() => {

        console.log('in useEffect');
        let ids = Array.from(Array(9).keys());
        console.log(ids);

        async function drawGrid() {
            // TODO draw the map using d3
            const svg = d3.select('.Options');
            let w = 100;
            let h = 100;
            let box = svg
                .attr("preserveAspectRatio", "xMinYMin meet")
                .style("background-color", "rgb(222, 225, 238)")
                .attr("viewBox", `0 0 ${w} ${h}`)
                .classed("svg-content", true)
                .selectAll('*').remove();

            box
                .selectAll('rect')
                .data(ids)
                .enter()
                .append('rect')
                .attr('x', (d) => (d / 3))
                .attr('y', (d) => (d % 3) * 20)
                .attr('width', 20)
                .attr('height', 20)
                .style('fill', (d)=>`${logo}`)

        };
        // let gridInfo = drawGrid();
        drawGrid();

    }, [props]);
    return (
        <div className="Container">
            <svg className="Options"></svg>
        </div>
    );
}

export default OptionBox;
