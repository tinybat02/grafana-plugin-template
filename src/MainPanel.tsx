import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { PanelOptions } from 'types';

interface Props extends PanelProps<PanelOptions> {}
interface State {}

export class MainPanel extends PureComponent<Props, State> {
  componentDidMount() {}

  componentDidUpdate(prevProps: Props) {}

  render() {
    const { width, height } = this.props;

    return (
      <div
        style={{
          width,
          height,
          padding: 10,
        }}
      >
        <h1>Hello</h1>
      </div>
    );
  }
}
