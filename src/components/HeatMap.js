import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import BreadCrumbComponent from './BreadCrumbComponent';
import { Col, Container, Row } from 'react-bootstrap';

const HeatMap = () => {
  const d3Graph = useRef();
  const d3Tooltip = useRef();

  const datasetUrl =
    'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';

  useEffect(() => {
    const colors = [
      '#313695',
      '#4575b4',
      '#74add1',
      '#abd9e9',
      '#e0f3f8',
      '#ffffbf',
      '#fee090',
      '#fdae61',
      '#f46d43',
      '#d73027',
      '#a50026',
    ];

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    axios.get(datasetUrl).then((res) => {
      const {
        data: { monthlyVariance, baseTemperature },
      } = res;

      const padding = 80;
      const width = 5 * Math.ceil(monthlyVariance.length / 12) - padding;
      const height = 32 * months.length + padding * 2;

      const legendWidth = 400;
      const legendHeight = 300 / colors.length;

      const svg = d3
        .select(d3Graph.current)
        .attr('viewBox', `0 0 ${width} ${height}`);

      const yScale = d3
        .scaleBand()
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        .rangeRound([0, height - padding * 2])
        .padding(0);

      const xScale = d3
        .scaleBand()
        .domain(monthlyVariance.map((val) => val.year))
        .range([0, width - padding]);

      const xAxis = d3
        .axisBottom(xScale)
        .tickValues(xScale.domain().filter((year) => year % 10 === 0))
        .tickFormat((year) =>
          d3.timeFormat('%Y')(new Date().setUTCFullYear(year))
        )
        .tickSize(10, 1);

      const yAxis = d3
        .axisLeft(yScale)
        .tickValues(yScale.domain())
        .tickFormat((month) =>
          d3.timeFormat('%B')(new Date().setUTCMonth(month))
        );

      svg
        .append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', `translate (${padding}, ${height - padding * 2})`);

      svg
        .append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', `translate(${padding}, 0)`);

      const minTemp = d3.min(monthlyVariance, (d) => d.variance);
      const maxTemp = d3.max(monthlyVariance, (d) => d.variance);

      var colorScale = d3
        .scaleThreshold()
        .domain(
          ((min, max, count) => {
            var array = [];
            var step = (max - min) / count;
            var base = min;
            for (var i = 1; i < count; i++) {
              array.push(base + i * step);
            }
            return array;
          })(minTemp, maxTemp, colors.length)
        )
        .range(colors);

      const tooltip = d3.select(d3Tooltip.current);

      svg
        .append('g')
        .classed('map', true)
        .attr('transform', `translate(${padding}, 0)`)
        .selectAll('rect')
        .data(monthlyVariance)
        .enter()
        .append('rect')
        .attr('class', 'cell')
        .attr('data-month', (d) => d.month - 1)
        .attr('data-year', (d) => d.year)
        .attr('data-temp', (d) => baseTemperature + d.variance)
        .attr('x', (d) => xScale(d.year))
        .attr('y', (d) => yScale(d.month - 1))
        .attr('width', (d) => xScale.bandwidth(d.year))
        .attr('height', (d) => yScale.bandwidth(d.month - 1))
        .attr('fill', (d) => colorScale(d.variance))
        .on('mouseover', (event, d) => {
          tooltip.html(
            `<p>${d.year} - ${months[d.month - 1]}</p><p>${d3.format('.1f')(
              baseTemperature + d.variance
            )}ºC</p><p>${d3.format('.1f')(d.variance)}ºC</p>`
          );
          tooltip.style('left', `${event.pageX + 10}px`);
          tooltip.style('top', `${event.pageY + 15}px`);
          tooltip.attr('data-year', d.year);
          tooltip.transition().style('opacity', 0.8);
        })
        .on('mouseout', () => {
          tooltip.html(`<p></p>`);
          tooltip.transition().style('opacity', -1);
        });

      const legendx = d3
        .scaleLinear()
        .domain([minTemp, maxTemp])
        .range([0, legendWidth]);

      const legendXAxis = d3
        .axisBottom()
        .scale(legendx)
        .tickSize(10, 0)
        .tickValues(colorScale.domain())
        .tickFormat(d3.format('.1f'));

      const legend = svg
        .append('g')
        .classed('legend', true)
        .attr('id', 'legend')
        .attr('transform', `translate(${padding}, ${height - padding})`);

      legend
        .append('g')
        .attr('transform', 'translate(' + 0 + ',' + legendHeight + ')')
        .call(legendXAxis);

      legend
        .append('g')
        .selectAll('rect')
        .data(
          colorScale.range().map((color) => {
            const d = colorScale.invertExtent(color);
            if (d[0] === null) {
              d[0] = legendx.domain()[0];
            }
            if (d[1] === null) {
              d[1] = legendx.domain()[1];
            }
            return d;
          })
        )
        .enter()
        .append('rect')
        .style('fill', (d) => colorScale(d[0]))
        .attr('x', (d) => legendx(d[0]))
        .attr('y', 0)
        .attr('width', (d) =>
          d[0] && d[1] ? legendx(d[1]) - legendx(d[0]) : legendx(null)
        )
        .attr('height', legendHeight);
    });
  }, []);

  return (
    <main
      style={{
        backgroundColor: '#000',
        minHeight: '100vh',
      }}
    >
      <Container style={{ minHeight: '100vh' }}>
        <Row
          className='justify-content-center align-items-center'
          style={{
            minHeight: '100vh',
          }}
        >
          <Col xs={12}>
            <BreadCrumbComponent
              pageTitle={'Visualize Data with a Bar Chart'}
            />
            <h1 id='title' className='text-center text-white'>
              Monthly Global Land-Surface Temperature
            </h1>
            <div className='d-flex flex-row justify-content-center'>
              <div style={{ maxWidth: 500 }}>
                <p className='text-white text-center' id='description'>
                  1753 - 2015: base temperature 8.66℃
                </p>
              </div>
            </div>
          </Col>
          <Col className='d-flex flex-row justify-content-center'>
            <div
              ref={d3Tooltip}
              id='tooltip'
              style={{
                position: 'absolute',
                padding: 4,
                background: '#fff',
                color: '#000',
                opacity: -1,
                textAlign: 'center',
                lineHeight: 0.5,
              }}
            ></div>
            <svg ref={d3Graph} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HeatMap;
