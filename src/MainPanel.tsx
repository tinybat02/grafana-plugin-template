import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { MapOptions } from 'types';

interface Props extends PanelProps<MapOptions> {}

export class MainPanel extends PureComponent<Props> {
  render() {
    const { width, height } = this.props;

    return (
      <div
        style={{
          position: 'relative',
          width,
          height,
        }}
      >
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
        >
          <g>
            <circle style={{ fill: '#32a852' }} r={100} />
          </g>
        </svg>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: '10px',
          }}
        ></div>
      </div>
    );
  }
}
