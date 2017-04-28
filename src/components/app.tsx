import * as React from 'react';
import { css } from 'aphrodite';

import styles from './app-style';

import Model from '../models/model';

import Viewer from './viewer';
import Controller from './controller';
import Elapsed from './elapsed';

export interface AppProps {
  srces: string[]; // srcs includes src of the images
}

export interface AppState {
  model: Model; // model is date model of this app
}

class App extends React.Component<AppProps, AppState> {
  _bindedSync: () => void;

  constructor(props: AppProps, state: AppState) {
    super(props);

    this.state = {
      model: new Model(this.props.srces)
    };

    this._bindedSync = this.sync.bind(this);
  }

  componentWillMount() {
    this.state.model.addListener('updated', this._bindedSync);
  }

  componentWillUnmount() {
    this.state.model.removeListener('updated', this._bindedSync);
  }

  render() {
    return (
      <div className={css(styles['container'])}>
        <div className={css(styles['viewer-container'])}>
          <button type="button"
            onClick={this.back.bind(this)}
            className={css(styles['back-button'])}>
            &lt;
          </button>
          <Viewer srces={this.props.srces} index={this.state.model.index} />
          <button type="button"
            onClick={this.next.bind(this)}
            className={css(styles['next-button'])}>
            &gt;
          </button>
        </div>
        <Controller srces={this.props.srces} index={this.state.model.index} update={this.update.bind(this)} />
        <div>
          <label>
            <input type="checkbox"
              checked={this.state.model.automode}
              onChange={this.toggle.bind(this)} />
            &nbsp; automode
          </label>
          <Elapsed automode={this.state.model.automode} interval={this.state.model.intervalDuration} startAt={this.state.model.changedAt} />
        </div>
        <div>
          <input type="number"
            onChange={this.change.bind(this)}
            defaultValue={this.state.model.intervalDuration.toString()} />
            &nbsp; interval
        </div>
      </div>
    );
  }

  sync(): void {
    this.setState({
      model: this.state.model
    });
  }

  update(index: number): void {
    this.state.model.update(index);
  }

  next(): void {
    this.state.model.next();
  }

  back(): void {
    this.state.model.back();
  }

  toggle(): void {
    this.state.model.toggleAuto();
  }

  change(e: Event): void {
    this.state.model.changeInterval(parseFloat((e.currentTarget as HTMLInputElement).value));
  }

}

export default App;
