import * as React from 'react';
import { css } from 'aphrodite';

import styles from './app-style';

import Model from '../models/model';

import Viewer from './viewer';
import Controller from './controller';

export interface AppProps {
  srces: string[]; // srcs includes src of the images
}

export interface AppState {
  model: Model; // model is date model of this app
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props);

    this.state = {
      model: new Model(this.props.srces)
    };
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
      </div>
    );
  }

  sync() {
    this.setState({
      model: this.state.model
    });
  }

  update(index: number): void {
    this.state.model.update(index);
    this.sync();
  }

  next(): void {
    this.state.model.next();
    this.sync();
  }

  back(): void {
    this.state.model.back();
    this.sync();
  }

}

export default App;
