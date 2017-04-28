import * as React from 'react';
import { css } from 'aphrodite';

import styles from './elapsed-style';

// Duration indicates number, specified milliseconds.
type Duration = number;

export interface ElapsedProps {
  interval: Duration;
  startAt: Duration;
  automode: boolean;
}

export interface ElapsedState {
  started: Boolean;
}

class Elapsed extends React.Component<ElapsedProps, ElapsedState> {
  private _cancel: number;
  private _canceled: boolean;

  constructor(props?: ElapsedProps, context?: ElapsedState) {
    super(props, context);

    this._canceled = false;

    this.state = {
      started: false
    };
  }

  componentDidMount() {
    this.reset();
  }

  componentWillReceiveProps(nextProps: ElapsedProps) {
    if (nextProps.startAt !== this.props.startAt) {
      this.reset();
    }
  }

  render() {
    const style = {
      transition: `transform ${this.state.started ? this.props.interval / 1000 : 0}s linear`,
      transform: `scale(${this.state.started ? '1' : '0'}, 1)`
    };

    console.log(this.state.started);

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.bar)} style={style}></div>
      </div>
    );
  }

  private reset() {
    this.setState({
      started: false
    });

    requestAnimationFrame(() => {
      this.setState({
        started: true
      })
    });
  }
}

export default Elapsed;
