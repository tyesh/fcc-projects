import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as d3 from 'd3';
import BreadCrumbComponent from './BreadCrumbComponent';
import Loader from './Loader';

const BarChart = () => {
  const [dataset, setDataset] = useState();

  const d3Chart = useRef();

  const datasetUrl =
    'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';

  useEffect(() => {
    axios.get(datasetUrl).then((res) => {
      const { data } = res;
      setDataset(data);
    });
  }, []);

  useEffect(() => {
    if (dataset) {
      const width = 800;
      const height = 600;
      const padding = 40;

      const xAccessor = (d) => d[0];
      const yAccessor = (d) => d[1];

      const values = dataset.data;

      const svg = d3
        .select(d3Chart.current)
        .attr('width', width)
        .attr('height', height);

      const heightScale = d3
        .scaleLinear()
        .domain([0, d3.max(values, yAccessor)])
        .range([0, height - 2 * padding]);

      const xScale = d3
        .scaleLinear()
        .domain([0, values.length - 1])
        .range([padding, width - padding]);

      const datesArray = values.map((item) => new Date(xAccessor(item)));

      const xAxisCale = d3
        .scaleTime()
        .domain([d3.min(datesArray), d3.max(datesArray)])
        .range([padding, width - padding]);

      const yAxisScale = d3
        .scaleLinear()
        .domain([0, d3.max(values, yAccessor)])
        .range([height - padding, padding]);

      svg
        .selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('width', (width - 2 * padding) / values.length)
        .attr('data-date', xAccessor)
        .attr('data-gdp', yAccessor)
        .attr('height', (item) => heightScale(yAccessor(item)))
        .attr('x', (_item, index) => xScale(index))
        .attr('y', (item) => height - padding - heightScale(yAccessor(item)));

      const xAxis = d3.axisBottom(xAxisCale);

      const yAxis = d3.axisLeft(yAxisScale);

      svg
        .append('g')
        .call(xAxis)
        .attr('id', 'x-axix')
        .attr('transform', `translate (0, ${height - padding})`);

      svg
        .append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', `translate(${padding}, 0)`);
    }
  }, [dataset]);

  if (!dataset) {
    return <Loader />;
  }

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
            <h1 className='text-center text-white'>United States GDP</h1>
            <div className='d-flex flex-row justify-content-center'>
              <p className='text-white text-center' style={{ maxWidth: 500 }}>
                Units: Billions of Dollars Seasonal Adjustment: Seasonally
                Adjusted Annual Rate Notes: A Guide to the National Income and
                Product Accounts of the United States (NIPA) - (
                <a
                  href='http://www.bea.gov/national/pdf/nipaguid.pdf'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  http://www.bea.gov/national/pdf/nipaguid.pdf
                </a>
                )
              </p>
            </div>
          </Col>
          <Col className='d-flex flex-row justify-content-center'>
            <svg ref={d3Chart} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BarChart;
