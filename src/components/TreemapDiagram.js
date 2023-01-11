import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import { Col } from 'react-bootstrap';

const TreemapDiagram = ({ dataUrl, description, title }) => {
  const d3Graph = useRef();
  const d3Tooltip = useRef();
  const d3legend = useRef();

  useEffect(() => {
    axios.get(dataUrl).then(({ data }) => {
      const root = d3
        .hierarchy(data)
        .eachBefore((d) => {
          d.data.id = `${d.parent ? d.parent.data.id + '.' : ''} ${
            d.data.name
          }`;
        })
        .sum((d) => d.value)
        .sort((a, b) => b.height - a.height || b.value - a.value);

      const width = 960;
      const height = 570;

      const fader = (color) => d3.interpolateRgb(color, '#fff')(0.2);

      const color = d3
        .scaleOrdinal()
        .range(
          [
            '#1f77b4',
            '#aec7e8',
            '#ff7f0e',
            '#ffbb78',
            '#2ca02c',
            '#98df8a',
            '#d62728',
            '#ff9896',
            '#9467bd',
            '#c5b0d5',
            '#8c564b',
            '#c49c94',
            '#e377c2',
            '#f7b6d2',
            '#7f7f7f',
            '#c7c7c7',
            '#bcbd22',
            '#dbdb8d',
            '#17becf',
            '#9edae5',
          ].map(fader)
        );

      const svg = d3
        .select(d3Graph.current)
        .attr('viewBox', `0 0 ${width} ${height}`);

      const treemap = d3.treemap().size([width, height]).paddingInner(1);

      treemap(root);

      const cell = svg
        .selectAll('g')
        .data(root.leaves())
        .enter()
        .append('g')
        .attr('class', ' group')
        .attr('transform', (d) => `translate(${d.x0}, ${d.y0})`);

      const tooltip = d3.select(d3Tooltip.current);

      cell
        .append('rect')
        .attr('id', (d) => d.data.id)
        .attr('class', 'tile')
        .attr('width', (d) => d.x1 - d.x0)
        .attr('height', (d) => d.y1 - d.y0)
        .attr('data-name', (d) => d.data.name)
        .attr('data-category', (d) => d.data.category)
        .attr('data-value', (d) => d.data.value)
        .attr('fill', (d) => color(d.data.category))
        .on('mousemove', (event, d) => {
          tooltip.html(
            `<p>Name: ${d.data.name}</p><p>Category: ${d.data.category}</p><p>Value: ${d.data.value}</p>`
          );
          tooltip.attr('data-value', d.data.value);
          tooltip.style('left', `${event.pageX + 10}px`);
          tooltip.style('top', `${event.pageY - 28}px`);
          tooltip.style('opacity', 0.9);
        })
        .on('mouseout', () => {
          tooltip.style('opacity', 0);
        });

      cell
        .append('text')
        .attr('class', 'tile-text')
        .style('font', '10px sans-serif')
        .selectAll('tspan')
        .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
        .enter()
        .append('tspan')
        .attr('x', 4)
        .attr('y', (d, i) => 13 + i * 10)
        .text((d) => d);

      const categories = root
        .leaves()
        .map((nodes) => nodes.data.category)
        .filter((category, index, self) => self.indexOf(category) === index);

      const legend = d3.select(d3legend.current);

      const legendWidth = 500;
      const LEGEND_OFFSET = 10;
      const LEGEND_RECT_SIZE = 15;
      const LEGEND_H_SPACING = 150;
      const LEGEND_V_SPACING = 10;
      const LEGEND_TEXT_X_OFFSET = 3;
      const LEGEND_TEXT_Y_OFFSET = -2;

      const legendItemsPerRow = Math.floor(legendWidth / LEGEND_H_SPACING);

      const legendItem = legend
        .append('g')
        .attr('transform', `translate(60, ${LEGEND_OFFSET})`)
        .selectAll('g')
        .data(categories)
        .enter()
        .append('g')
        .attr(
          'transform',
          (_d, i) =>
            `translate(${(i % legendItemsPerRow) * LEGEND_H_SPACING}, ${
              Math.floor(i / legendItemsPerRow) * LEGEND_RECT_SIZE +
              LEGEND_V_SPACING * Math.floor(i / legendItemsPerRow)
            })`
        );

      legendItem
        .append('rect')
        .attr('width', LEGEND_RECT_SIZE)
        .attr('height', LEGEND_RECT_SIZE)
        .attr('class', 'legend-item')
        .attr('fill', (d) => color(d));

      legendItem
        .append('text')
        .attr('x', LEGEND_RECT_SIZE + LEGEND_TEXT_X_OFFSET)
        .attr('y', LEGEND_RECT_SIZE + LEGEND_TEXT_Y_OFFSET)
        .text((d) => d)
        .style('fill', '#fff');
    });
  }, [dataUrl]);

  return (
    <>
      <Col xs={12}>
        <div className='d-flex flex-row justify-content-center'>
          <div style={{ maxWidth: 500 }}>
            <h2 className='text-white text-center' id='title'>
              {title}
            </h2>
            <p className='text-white text-center' id='description'>
              {description}
            </p>
          </div>
        </div>
      </Col>
      <Col className='d-flex flex-row justify-content-center' xs={12}>
        <div
          ref={d3Tooltip}
          id='tooltip'
          style={{
            position: 'absolute',
            padding: 10,
            background: '#ecf0f1',
            color: '#000',
            opacity: -1,
            textAlign: 'center',
            boxShadow: '1px 1px 10px rgba(128, 128, 128, 0.6)',
            lineHeight: 0.5,
          }}
        ></div>
        <svg ref={d3Graph} />
      </Col>
      <Col className='d-flex flex-row justify-content-center p-5' xs={12}>
        <svg ref={d3legend} id='legend' />
      </Col>
    </>
  );
};

export default TreemapDiagram;
