import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import axios from "axios";

function D3JS(props) {


  const [data, setData] = useState({});
  useEffect(()=>{
      const fetchData = async () => {
          const result = await axios.get(
              'http://localhost:3000/budget',
          );
          setData(result.data.myBudget);
      };
      fetchData();
  }, []);
  

  const {
    outerRadius,
    innerRadius,
  } = props;

  const margin = {
    top: 10, right: 10, bottom: 10, left: 10,
  };

  const colorScale = d3.scaleOrdinal(['#ffcd56',
  '#ff6384',
  '#36a2eb',
  '#fd6b19',
  '#FF8A33',
  '#33BEFF',
  '#33FF8D',
  '#3390FF']);

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;


  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    //To remove any old svg present.
    d3.select('#pie-chart')
      .select('svg')
      .remove();

    // pieChart svg
    const svg = d3
      .select('#pie-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.budget);

    const arc = svg
      .selectAll()
      .data(pieGenerator(data))
      .enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', '#36a2eb')
      .style('stroke-width', 0);

    // Append titles of the values
    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.data.title)
      .style('font-size', 12)
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }    

  return <div id="pie-chart" />;
}

export default D3JS;