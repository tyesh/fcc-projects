import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import BreadCrumbComponent from './BreadCrumbComponent';
import { Col, Container, Row } from 'react-bootstrap';

const ChroroplethMap = () => {
  const d3Graph = useRef();
  const d3Tooltip = useRef();

  const educationUrl =
    'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';

  const countiesUrl =
    'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';

  useEffect(() => {
    const educationPromise = axios.get(educationUrl);
    const countiesPromise = axios.get(countiesUrl);

    Promise.all([educationPromise, countiesPromise]).then((data) => {
      const [eduResp, couRes] = data;
      const { data: dataEdu } = eduResp;
      const { data: dataCou } = couRes;

      const geojson = feature(dataCou, dataCou.objects.counties);

      const width = 1000;
      const height = 680;

      const path = d3.geoPath();

      const colorScale = d3
        .scaleLinear()
        .domain([0, 100])
        .range(['white', 'darkgreen']);

      const svg = d3
        .select(d3Graph.current)
        .attr('viewBox', `0 0 ${width} ${height}`);

      const tooltip = d3.select(d3Tooltip.current);

      svg
        .selectAll('path')
        .data(geojson.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', (d) =>
          colorScale(dataEdu.find((x) => x.fips === d.id).bachelorsOrHigher)
        )
        .attr('class', 'county')
        .attr('data-fips', (d) => dataEdu.find((x) => x.fips === d.id).fips)
        .attr(
          'data-education',
          (d) => dataEdu.find((x) => x.fips === d.id).bachelorsOrHigher
        )
        .on('mouseover', (event, d) => {
          const node = dataEdu.find((x) => x.fips === d.id);
          tooltip.text(
            `${node.area_name}, ${node.state} : ${node.bachelorsOrHigher}`
          );
          tooltip.style('left', `${event.pageX + 15}px`);
          tooltip.style('top', `${event.pageY + 15}px`);
          tooltip.attr('data-education', node.bachelorsOrHigher);
          tooltip.transition().style('opacity', 1);
        })
        .on('mouseout', () => {
          tooltip.html(`<p></p>`);
          tooltip.transition().style('opacity', -1);
        });
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
              D3 Choropleth Map
            </h1>
            <div className='d-flex flex-row justify-content-center'>
              <div style={{ maxWidth: 500 }}>
                <p className='text-white text-center' id='description'>
                  % of Residents Over Age 25 with Bachelor's Degree or Higher
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} className='d-flex flex-row justify-content-center'>
            <svg id='legend' width='1000' height='50'>
              <text x='150' y='35' style={{ fill: '#fff' }}>
                0%:
              </text>
              <rect
                className='legendRect'
                x='200'
                y='0'
                width='50'
                height='50'
                fill='white'
              ></rect>
              <text x='350' y='35' style={{ fill: '#fff' }}>
                30%:
              </text>
              <rect
                className='legendRect'
                x='400'
                y='0'
                width='50'
                height='50'
                fill='rgb(179, 209, 179)'
              ></rect>
              <text x='550' y='35' style={{ fill: '#fff' }}>
                60%:
              </text>
              <rect
                className='legendRect'
                x='600'
                y='0'
                width='50'
                height='50'
                fill='rgb(102, 162, 102)'
              ></rect>
              <text x='750' y='35' style={{ fill: '#fff' }}>
                100%:
              </text>
              <rect
                className='legendRect'
                x='800'
                y='0'
                width='50'
                height='50'
                fill='darkgreen'
              ></rect>
            </svg>
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

export default ChroroplethMap;
