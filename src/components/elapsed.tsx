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
  duration: Duration;
}

class Elapsed extends React.Component<ElapsedProps, ElapsedState> {
  private _cancel: number;
  private _canceled: boolean;

  constructor(props?: ElapsedProps, context?: ElapsedState) {
    super(props, context);

    this._canceled = false;

    this.state = {
      duration: 0
    };
  }

  componentWillMount() {
    this._cancel = requestAnimationFrame(this._tick.bind(this))
  }

  componentWillUnmount() {
    this._canceled = true;
    cancelAnimationFrame(this._cancel);
  }

  render() {
    const style = {
      transform: `scale(${this.props.automode ? this.per : 0}, 1)`
    };

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.bar)} style={style}></div>
      </div>
    );
  }

  private _tick() {
    this.setState({
      duration: this.now - this.props.startAt
    });

    if (!this._canceled) {
      this._cancel = requestAnimationFrame(this._tick.bind(this))
    }
  }

  private get now(): Duration {
    return new Date().getTime();
  }

  private get per(): number {
    return Math.min(1, Math.max(0, this.state.duration / this.props.interval));
  }
}

export default Elapsed;
