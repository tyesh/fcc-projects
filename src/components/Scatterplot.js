import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import BreadCrumbComponent from './BreadCrumbComponent';
import { Col, Container, Row } from 'react-bootstrap';

const Scatterplot = () => {
  const [dataset, setDataset] = useState();

  const d3Graph = useRef();
  const d3Tooltip = useRef();

  const datasetUrl =
    'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

  useEffect(() => {
    axios.get(datasetUrl).then((res) => {
      const { data } = res;
      setDataset(data);
    });
  }, []);

  useEffect(() => {
    if (dataset) {
      const width = 800;
      const height = 750;
      const padding = 40;
      const paddingTop = 100;

      const options = {
        minute: 'numeric',
        second: 'numeric',
      };

      const timeFormatter = new Intl.DateTimeFormat('es-PY', options);

      const xAccessor = (d) => d.Year;
      const yAccessor = (d) => new Date(d.Seconds * 1000);
      const nameAccesor = (d) => d.Name;
      const nationalityAccesor = (d) => d.Nationality;
      const dopingAccesor = (d) => d.Doping;

      const colorAccesor = (d) => {
        if (d.Doping) {
          return '#2980b9';
        }

        return '#f1c40f';
      };

      const svg = d3
        .select(d3Graph.current)
        .attr('width', width)
        .attr('height', height);

      const yScale = d3
        .scaleTime()
        .domain([d3.max(dataset, yAccessor), d3.min(dataset, yAccessor)])
        .range([height - padding, paddingTop]);

      const xScale = d3
        .scaleLinear()
        .domain([
          d3.min(dataset, xAccessor) - 1,
          d3.max(dataset, xAccessor) + 1,
        ])
        .range([padding, width - padding]);

      const tooltip = d3.select(d3Tooltip.current);

      const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('.0f'));

      const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'));

      svg
        .append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', `translate (0, ${height - padding})`);

      svg
        .append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', `translate(${padding}, 0)`);

      svg
        .selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('data-xvalue', xAccessor)
        .attr('data-yvalue', yAccessor)
        .attr('data-name', nameAccesor)
        .attr('data-nation', nationalityAccesor)
        .attr('data-doping', dopingAccesor)
        .attr('fill', (item) => colorAccesor(item))
        .attr('cx', (item) => xScale(xAccessor(item)))
        .attr('cy', (item) => yScale(yAccessor(item)))
        .attr('r', 8)
        .on('mouseover', (event) => {
          const { dataset: data } = event.target;
          tooltip.html(
            `<p>${data.name}, ${data.nation}</p><p>Year ${
              data.xvalue
            }, Time ${timeFormatter.format(new Date(data.yvalue))}</p><p>${
              data.doping
            }</p>`
          );
          tooltip.style('left', `${event.pageX + 10}px`);
          tooltip.style('top', `${event.pageY + 15}px`);
          tooltip.attr('data-year', data.xvalue);
          tooltip.transition().style('opacity', 1);
        })
        .on('mouseout', () => {
          tooltip.html(`<p></p>`);
          tooltip.transition().style('opacity', -1);
        });

      svg
        .append('text')
        .attr('x', 10)
        .attr('y', 20)
        .text('Legends')
        .attr('id', 'legend')
        .style('font-size', '30px')
        .attr('fill', '#fff')
        .attr('alignment-baseline', 'middle');

      svg
        .append('circle')
        .attr('cx', 10)
        .attr('cy', 45)
        .attr('r', 6)
        .style('fill', '#2980b9');
      svg
        .append('circle')
        .attr('cx', 10)
        .attr('cy', 65)
        .attr('r', 6)
        .style('fill', '#f1c40f');
      svg
        .append('text')
        .attr('x', 30)
        .attr('y', 50)
        .text('No doping allegations')
        .style('font-size', '15px')
        .attr('fill', '#fff')
        .attr('alignment-baseline', 'middle');
      svg
        .append('text')
        .attr('x', 30)
        .attr('y', 70)
        .text('Riders with doping allegations')
        .style('font-size', '15px')
        .attr('fill', '#fff')
        .attr('alignment-baseline', 'middle');
    }
  }, [dataset]);

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
              Doping in Professional Bicycle Racing
            </h1>
            <div className='d-flex flex-row justify-content-center'>
              <div style={{ maxWidth: 500 }}>
                <p className='text-white text-center'>
                  35 Fastest times up Alpe d'Huez
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
                border: '1px solid #000',
                color: '#000',
                opacity: -1,
              }}
            ></div>
            <svg ref={d3Graph} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Scatterplot;
